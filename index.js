/** @module pandocjs */

const os = require('os');
const fs = require('fs-extra');
const path = require('path');
const cp = require('child_process');
const gr = require('github-release-packager');
const pandoctypes = require('./lib/pandoc-types');

gr.UpdateBinarySync();

/**
 * @param {'Input'|'Output'} kind
 * @param {string} format
 */
function validateFormat (kind, format) {
  var formatList = Object.keys(pandoctypes[`${kind}Formats`]);
  if (!formatList.includes(format)) {
    throw Error(`Unsupported ${kind.toLowerCase()} format [${format}]. Supported formats are: ${formatList.join(', ')}`);
  }
}

/**
 * @param {import('./lib/pandoc-types').PandocOptions} options A
 * {@link module:pandoc-types~PandocOptions} object.
 * @returns {string} An entire command line string.
 */
function validateOptions (options) {
  var result = [`"${gr.GetExecutable('pandoc')}"`];

  Object.keys(options).forEach(optionKey => {
    if (options[optionKey] === undefined) {
      return; // eslint-disable-line no-useless-return
    }

    var literal = pandoctypes.Literals[optionKey];
    if (typeof literal !== 'string') {
      throw Error(`Literal for option '${optionKey}' could not be found.`);
    }

    var optionValue = options[optionKey];
    var optionType = typeof optionValue;
    switch (optionType) {
      case 'boolean':
        result.push(literal);
        break;
      case 'string':
        if (`${optionValue}`.indexOf(' ') >= 0) {
          result.push(`${literal}="${optionValue}"`);
        } else {
          result.push(`${literal}=${optionValue}`);
        }
        break;
      case 'object':
        var optionValues = [];
        if (!Array.isArray(optionValue)) {
          optionValues = [optionValue];
        } else {
          optionValues = optionValue;
        }

        optionValues.forEach(optionValue => {
          var keyValues = [];
          Object.keys(optionValue).sort().forEach(key => {
            var keyValue = optionValue[key];
            if (`${keyValue}`.indexOf(' ') >= 0) {
              keyValues.push(`"${keyValue}"`);
            } else {
              keyValues.push(`${keyValue}`);
            }
          });
          result.push(`${literal}=${keyValues.join(':')}`);
        });
        break;
      default:
        console.warn(`Unknown option type '${optionType}' of value '${optionValue}' in option [${optionKey}] (literal '${literal}').`);
        break;
    }
  });

  return result.join(' ');
}

/**
 * @param {string} inputFile The file to read from.
 * @param {import('./lib/pandoc-types').InputFormat} inputFormat Format expected
 * in `inputFile`.
 * @param {string} outputFile The file to write to.
 * @param {import('./lib/pandoc-types').OutputFormat} outputFormat Format to
 * apply in `outputFile`.
 * @param {import('./lib/pandoc-types').PandocOptions=} options A
 * {@link module:pandoc-types~PandocOptions} object.
 */
exports.ConvertFileSync = (inputFile, inputFormat, outputFile, outputFormat, options) => {
  validateFormat('Input', inputFormat);
  validateFormat('Output', outputFormat);

  options = options || {};
  options.output = outputFile;
  options.to = outputFormat;
  options.from = inputFormat;

  var cmdLine = validateOptions(options);
  cmdLine += ` "${inputFile}"`;

  var result = cp.execSync(cmdLine).toString();
  if (result && typeof result === 'string' && result.length > 0) {
    throw Error(result);
  }
};

/**
 * @param {string} input The content to convert and save.
 * @param {import('./lib/pandoc-types').InputFormat} inputFormat Format expected
 * in `input`.
 * @param {string} outputFile The file to write to.
 * @param {import('./lib/pandoc-types').OutputFormat} outputFormat Format to
 * apply in `outputFile`.
 * @param {import('./lib/pandoc-types').PandocOptions=} options A
 * {@link module:pandoc-types~PandocOptions} object.
 */
exports.SaveSync = (input, inputFormat, outputFile, outputFormat, options) => {
  validateFormat('Input', inputFormat);
  validateFormat('Output', outputFormat);

  options = options || {};
  options.output = outputFile;
  options.to = outputFormat;
  options.from = inputFormat;

  var cmdLine = validateOptions(options);
  var tempPath = fs.mkdtempSync(path.join(os.tmpdir(), 'temp-pandoc-'));
  var inputFile = path.join(tempPath, inputFormat);
  fs.writeFileSync(inputFile, input);

  cmdLine += ` "${inputFile}"`;

  var result = cp.execSync(cmdLine).toString();
  if (result && typeof result === 'string' && result.length > 0) {
    throw Error(result);
  }

  fs.removeSync(tempPath);
};
