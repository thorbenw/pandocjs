const os = require('os');
const fs = require('fs-extra');
const path = require('path');
const assert = require('assert');
const grp = require('github-release-packager');
const pandoc = require('../index');
// @ts-ignore
const thisPackage = require('../package.json');

console.log(`${os.EOL}Running Mocha Test Suite ...`);

describe(`${thisPackage.name} tests`, function () {
  it('grp.UpdatePackageSync() should succeed', (done) => {
    grp.UpdatePackageSync({ packagePath: '.', operation: grp.UpdateOperation.force });

    done();
  });

  it('ConvertFileSync() should succeed', (done) => {
    var markownReadmeFile = path.join(__dirname, 'README.html');

    if (fs.existsSync(markownReadmeFile)) {
      if (fs.lstatSync(markownReadmeFile).isDirectory()) {
        throw Error(`Target readme file '${markownReadmeFile}' already exists and is a directory.`);
      } else {
        fs.removeSync(markownReadmeFile);
      }
    }

    pandoc.ConvertFileSync('README.md', 'gfm', markownReadmeFile, 'html5', { verbose: true });

    assert.ok(fs.existsSync(markownReadmeFile), `target readme file '${markownReadmeFile}' should exist`);
    fs.removeSync(markownReadmeFile);

    done();
  });
});
