const os = require('os');
const cp = require('child_process');
const fs = require('fs');
const path = require('path');

/** @type {import('github-release-packager').GitHubReleasePackagerPlugin} */
exports.github = {
  Name: __filename,
  getDownloadURL: async (repository, version, defaultPlugin) => {
    var platform;
    var extension = 'zip';

    switch (process.platform.toLowerCase()) {
      case 'win32':
        switch (process.arch.toLowerCase()) {
          case 'x64':
            platform = 'windows-x86_64';
            break;
          default:
            platform = 'windows-i386';
            break;
        }
        break;
      case 'linux':
        switch (process.arch.toLowerCase()) {
          case 'x64':
            platform = 'linux-amd64';
            extension = 'tar.gz';
            break;
          default:
            throw Error(`Release is not available for this architecture (platform = '${process.platform}', arch = '${process.arch}').`);
        }
        break;
      case 'darwin':
        platform = 'macOS';
        break;
      default:
        platform = `${process.platform}-${process.arch}`;
        break;
    }

    return `https://github.com/${repository.owner}/${repository.name}/releases/download/${version}/${repository.name}-${version}-${platform}.${extension}`;
  },
  /** @type {import('github-release-packager').GitHubReleasePackagerProcessBinaryCallback} */
  processBinary: async (file, folder, defaultPlugin) => {
    var umask = process.umask(); // 0o644;

    // #region temporary, to debug darwin
    if (['linux', 'darwin'].includes(process.platform)) {
      // umask = process.umask(umask);
    }
    console.debug(`process.umask() ${umask.toString(8)} => ${process.umask().toString(8)}`);
    // #endregion

    switch (process.platform.toLowerCase()) {
      case 'linux':
        require('tar4').extract({ file: file, cwd: folder, sync: true });
        break;
      default:
        await defaultPlugin.processBinary(file, folder, defaultPlugin);
        break;
    }

    // #region temporary, to debug darwin
    if (['linux', 'darwin'].includes(process.platform)) {
      // umask = process.umask(umask);
    }
    console.debug(`process.umask() ${umask.toString(8)} => ${process.umask().toString(8)}`);
    // #endregion
  },
  /** @type {import('github-release-packager').GitHubReleasePackagerExecutablesCallback} */
  getExecutables: async (repository, version, folder, defaultPlugin) => {
    var executablePath = path.join(folder, `${repository.name}-${version}`);

    return {
      pandoc: {
        win32: {
          default: path.join(executablePath, 'pandoc.exe')
        },
        linux: {
          x64: path.join(executablePath, 'bin', 'pandoc')
        },
        darwin: {
          default: path.join(executablePath, 'bin', 'pandoc')
        }
      }
    };
  },
  /** @type {import('github-release-packager').GitHubReleasePackagerPostProcessCallback} */
  postProcess: async (repository, version, folder, executables, defaultPlugin) => {
    var executableFile = await defaultPlugin.GetExecutable('pandoc', executables, defaultPlugin);

    // #region temporary, to debug darwin
    if (['linux', 'darwin'].includes(process.platform)) {
      cp.execSync('ls -laR', { stdio: 'inherit' });
      // cp.execSync(`chmod 644 ${executableFile}`, { stdio: 'inherit' });
      // cp.execSync('ls -laR', { stdio: 'inherit' });
    }
    // #endregion

    if (!fs.existsSync(executableFile)) {
      throw Error(`Pandoc executale '${executableFile}' could not be found.`);
    } else {
      var formats = {};
      formats.input = cp.execSync(`"${executableFile}" --list-input-formats`).toString().trim().split(os.EOL);
      formats.output = cp.execSync(`"${executableFile}" --list-output-formats`).toString().trim().split(os.EOL);
      /** @type {string[]} */
      formats.options = cp.execSync(`"${executableFile}" --help`).toString().trim().split(os.EOL);
      formats.options = formats.options.slice(1);
      formats.options.forEach((option, index) => {
        var raw = option.substr(24);
        var opt = raw.match(/--[A-Za-z0-9-=\[\]:|]+/); // eslint-disable-line no-useless-escape
        if (opt.length === 1) {
          formats.options[index] = opt[0];
        } else {
          console.warn(`Found ${opt.length} matches in '${option}'.`);
          formats.options[index] = raw;
        }
      });
      fs.writeFileSync(path.join(path.dirname(executableFile), 'formats.json'), JSON.stringify(formats, null, 2), { encoding: 'utf8' });

      var packagePath = path.dirname(path.dirname(folder));
      var libPath = path.join(packagePath, 'lib');
      var typPath = path.join(libPath, 'pandoc-types.js');
      var formatLines = [];
      var lines = [];
      var typeDefs = {};

      // #region Header and Format typedefs
      lines.push('/* cSpell:disable */');
      lines.push('/** @module pandoc-types */');
      lines.push(`/** @typedef {'${formats.input.join('\'|\'')}'} InputFormat */`);
      lines.push(`/** @typedef {'${formats.output.join('\'|\'')}'} OutputFormat */`);
      lines.push('');
      // #endregion

      // #region PandocOptions typedef
      var literals = {};
      lines.push('/** @typedef {object} PandocOptions');
      formats.options.forEach(option => {
        var literal = option.match(/^--([A-Za-z0-9-]+)/).pop();
        var name = literal;
        var dashes = name.match(/-./g);
        if (dashes) {
          dashes.forEach(dash => {
            name = name.replace(dash, dash[1].toUpperCase());
          });
        }
        literals[name] = literal;
        var shortOption = option;

        // Find and mark optional parameters
        var paramsOptional = [];
        var params = shortOption.match(/(\[=.+\]|\[:.+\])/g);
        if (params) {
          params.forEach(param => {
            var paramShort = param.substr(1, param.length - 2);
            paramsOptional.push(paramShort.substr(1));
            shortOption = shortOption.replace(param, paramShort);
          });
        }
        if (paramsOptional.length > 0) {
          console.debug(`Shortened option ${option} to ${shortOption}, optional parameters are: ${paramsOptional.join(', ')}`);
        }

        // Find parameters and  determine parameter and option types
        var optionTypes = ['boolean'];
        params = shortOption.match(/(=.+)/g);
        if (params) {
          params.forEach(param => {
            var paramShort = param.substr(1);

            // If param is an enum type, format and bail out
            var enumParam = paramShort.split('|');
            if (enumParam.length > 1) {
              if (paramShort === paramShort.toUpperCase()) {
                optionTypes = ['string'];
              } else {
                optionTypes = [`'${enumParam.join('\'|\'')}'`];
              }
              return;
            }

            // If param is a complex type, create type and bail out
            var cplxParams = paramShort.split(':');
            if (cplxParams.length > 1) {
              var typeDef = {};
              var typeDefName = 'Pandoc' + name[0].toUpperCase() + name.substr(1);
              optionTypes = [typeDefName + '[]'];

              cplxParams.forEach(cplxParam => {
                if (paramsOptional.includes(cplxParam.toUpperCase())) {
                  typeDef[cplxParam.toLowerCase()] = 'string=';
                } else {
                  typeDef[cplxParam.toLowerCase()] = 'string';
                }
              });
              typeDefs[typeDefName] = typeDef;
              return;
            }

            // If param isn't specified otherwise
            switch (paramShort.toUpperCase()) {
              case 'NUMBER':
                optionTypes = ['number'];
                break;
              case 'FORMAT':
                switch (name.toUpperCase()) {
                  case 'FROM':
                    console.debug(`Using input format type for option ${name}.`);
                    optionTypes = ['InputFormat'];
                    break;
                  case 'TO':
                    console.debug(`Using output format type for option ${name}.`);
                    optionTypes = ['OutputFormat'];
                    break;
                  default:
                    console.debug(`Using unspecific format type for option ${name}.`);
                    optionTypes = ['InputFormat', 'OutputFormat'];
                    break;
                }
                break;
              default:
                optionTypes = ['string'];
                break;
            }
          });
        }
        lines.push(` * @property {${optionTypes.length > 1 ? `(${optionTypes.join('|')})` : optionTypes[0]}=} ${name} \`${option}\``);
      });
      lines.push(' */');
      lines.push('//');
      lines.push('');
      // #endregion

      // #region Pandoc Options Parameter typedefs
      Object.keys(typeDefs).forEach(key => {
        lines.push(`/** @typedef {object} ${key}`);
        var typeDef = typeDefs[key];
        Object.keys(typeDef).forEach(propKey => {
          lines.push(` * @property {${typeDef[propKey]}} ${propKey} The ${propKey} property.`);
        });
        lines.push(' */');
        lines.push('//');
        lines.push('');
      });
      // #endregion

      // #region Literals enum
      lines.push('/** @enum {string} */');
      lines.push('exports.Literals = {');
      formatLines = [];
      Object.keys(literals).forEach(literal => {
        formatLines.push(`${literal}: '--${literals[literal]}'`);
      });
      lines.push('  ' + formatLines.join(`,${os.EOL}  `));
      lines.push('};');
      lines.push('');
      // #endregion

      // #region InputFormats enum
      lines.push('/** @enum {string} */');
      lines.push('exports.InputFormats = {');
      formatLines = [];
      formats.input.forEach(format => {
        formatLines.push(`${format}: '${format}'`);
      });
      lines.push('  ' + formatLines.join(`,${os.EOL}  `));
      lines.push('};');
      lines.push('');
      // #endregion

      // #region OutputFormats enum
      lines.push('/** @enum {string} */');
      lines.push('exports.OutputFormats = {');
      formatLines = [];
      formats.output.forEach(format => {
        formatLines.push(`${format}: '${format}'`);
      });
      lines.push('  ' + formatLines.join(`,${os.EOL}  `));
      lines.push('};');
      // #endregion

      fs.writeFileSync(typPath, lines.join(os.EOL) + os.EOL, { encoding: 'utf8' });
    }

    // There are neither platform independent executables or scripts in pandoc,
    // nor do we provide anything like that here, so don't add anything to
    // the bin object of the package file.
    return {};
  }
};
