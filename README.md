pandocjs
========

Another wrapper for pandoc, including automatic binary download.

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/standard/semistandard)
[![vscode-cspell-style](https://img.shields.io/badge/spell%20check-cSpell-brightgreen.svg?style=flat-square&logo=visual-studio-code)](https://github.com/streetsidesoftware/vscode-spell-checker)
[![github-release-packager-issues](https://img.shields.io/github/issues/thorbenw/pandocjs)](https://github.com/thorbenw/pandocjs)
[![github-release-packager-style](https://img.shields.io/node/v/pandocjs)](https://github.com/thorbenw/pandocjs)
[![github-release-packager-license](https://img.shields.io/npm/l/pandocjs)](https://github.com/thorbenw/pandocjs)
[![github-release-packager-version](https://img.shields.io/npm/v/pandocjs)](https://github.com/thorbenw/pandocjs)

Installation
------------
```bash
npm i pandocjs
```

Why?
----
Because I couldn't any npm package to wrap [pandoc](https://pandoc.org/) for use
with JavaScript in node without requiring pandoc to be already installed
locally. This package installs the required binaries in the background,
independent in means of version and binaries from a locally `pandoc`
installation.

Usage
-----
To convert the contents of an existing file (docbook format) info to a file in
markdown format, use the `ConvertFileSync()` method:
```javascript
const pandoc = require('pandocjs');

pandoc.ConvertFileSync('document.xml', 'docbook', 'document.md', 'gfm', { atxHeaders: true, wrap: 'preserve' });
```

Development Support
-------------------
There's plenty of JsDoc documentation included in this package (auto generated
calling `pandoc` with the `--help`, `--list-input-formats` and
`--list-output-formats` options). If your development environment provides
assistance by reading this information, all methods can be used pretty
straight forward (e.g. Visual Studio Code reads the JsDoc comments to
include it in the Intellisense feature).
