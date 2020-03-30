/* cSpell:disable */
/** @module pandoc-types */
/** @typedef {'commonmark'|'creole'|'csv'|'docbook'|'docx'|'dokuwiki'|'epub'|'fb2'|'gfm'|'haddock'|'html'|'ipynb'|'jats'|'jira'|'json'|'latex'|'man'|'markdown'|'markdown_github'|'markdown_mmd'|'markdown_phpextra'|'markdown_strict'|'mediawiki'|'muse'|'native'|'odt'|'opml'|'org'|'rst'|'t2t'|'textile'|'tikiwiki'|'twiki'|'vimwiki'} InputFormat */
/** @typedef {'asciidoc'|'asciidoctor'|'beamer'|'commonmark'|'context'|'docbook'|'docbook4'|'docbook5'|'docx'|'dokuwiki'|'dzslides'|'epub'|'epub2'|'epub3'|'fb2'|'gfm'|'haddock'|'html'|'html4'|'html5'|'icml'|'ipynb'|'jats'|'jats_archiving'|'jats_articleauthoring'|'jats_publishing'|'jira'|'json'|'latex'|'man'|'markdown'|'markdown_github'|'markdown_mmd'|'markdown_phpextra'|'markdown_strict'|'mediawiki'|'ms'|'muse'|'native'|'odt'|'opendocument'|'opml'|'org'|'pdf'|'plain'|'pptx'|'revealjs'|'rst'|'rtf'|'s5'|'slideous'|'slidy'|'tei'|'texinfo'|'textile'|'xwiki'|'zimwiki'} OutputFormat */

/** @typedef {object} PandocOptions
 * @property {InputFormat=} from `--from=FORMAT`
 * @property {OutputFormat=} to `--to=FORMAT`
 * @property {string=} output `--output=FILE`
 * @property {string=} dataDir `--data-dir=DIRECTORY`
 * @property {PandocMetadata[]=} metadata `--metadata=KEY[:VALUE]`
 * @property {string=} metadataFile `--metadata-file=FILE`
 * @property {string=} defaults `--defaults=FILE`
 * @property {boolean=} fileScope `--file-scope`
 * @property {boolean=} standalone `--standalone`
 * @property {string=} template `--template=FILE`
 * @property {PandocVariable[]=} variable `--variable=KEY[:VALUE]`
 * @property {'auto'|'none'|'preserve'=} wrap `--wrap=auto|none|preserve`
 * @property {boolean=} ascii `--ascii`
 * @property {boolean=} toc `--toc`
 * @property {number=} tocDepth `--toc-depth=NUMBER`
 * @property {boolean=} numberSections `--number-sections`
 * @property {string=} numberOffset `--number-offset=NUMBERS`
 * @property {'section'|'chapter'|'part'=} topLevelDivision `--top-level-division=section|chapter|part`
 * @property {string=} extractMedia `--extract-media=PATH`
 * @property {string=} resourcePath `--resource-path=SEARCHPATH`
 * @property {string=} includeInHeader `--include-in-header=FILE`
 * @property {string=} includeBeforeBody `--include-before-body=FILE`
 * @property {string=} includeAfterBody `--include-after-body=FILE`
 * @property {boolean=} noHighlight `--no-highlight`
 * @property {string=} highlightStyle `--highlight-style=STYLE|FILE`
 * @property {string=} syntaxDefinition `--syntax-definition=FILE`
 * @property {number=} dpi `--dpi=NUMBER`
 * @property {'crlf'|'lf'|'native'=} eol `--eol=crlf|lf|native`
 * @property {number=} columns `--columns=NUMBER`
 * @property {boolean=} preserveTabs `--preserve-tabs`
 * @property {number=} tabStop `--tab-stop=NUMBER`
 * @property {string=} pdfEngine `--pdf-engine=PROGRAM`
 * @property {string=} pdfEngineOpt `--pdf-engine-opt=STRING`
 * @property {string=} referenceDoc `--reference-doc=FILE`
 * @property {boolean=} selfContained `--self-contained`
 * @property {PandocRequestHeader[]=} requestHeader `--request-header=NAME:VALUE`
 * @property {string=} abbreviations `--abbreviations=FILE`
 * @property {string=} indentedCodeClasses `--indented-code-classes=STRING`
 * @property {string=} defaultImageExtension `--default-image-extension=extension`
 * @property {string=} filter `--filter=PROGRAM`
 * @property {string=} luaFilter `--lua-filter=SCRIPTPATH`
 * @property {number=} shiftHeadingLevelBy `--shift-heading-level-by=NUMBER`
 * @property {number=} baseHeaderLevel `--base-header-level=NUMBER`
 * @property {boolean=} stripEmptyParagraphs `--strip-empty-paragraphs`
 * @property {'accept'|'reject'|'all'=} trackChanges `--track-changes=accept|reject|all`
 * @property {boolean=} stripComments `--strip-comments`
 * @property {boolean=} referenceLinks `--reference-links`
 * @property {'block'|'section'|'document'=} referenceLocation `--reference-location=block|section|document`
 * @property {boolean=} atxHeaders `--atx-headers`
 * @property {boolean=} listings `--listings`
 * @property {boolean=} incremental `--incremental`
 * @property {number=} slideLevel `--slide-level=NUMBER`
 * @property {boolean=} sectionDivs `--section-divs`
 * @property {boolean=} htmlQTags `--html-q-tags`
 * @property {'none'|'javascript'|'references'=} emailObfuscation `--email-obfuscation=none|javascript|references`
 * @property {string=} idPrefix `--id-prefix=STRING`
 * @property {string=} titlePrefix `--title-prefix=STRING`
 * @property {string=} css `--css=URL`
 * @property {string=} epubSubdirectory `--epub-subdirectory=DIRNAME`
 * @property {string=} epubCoverImage `--epub-cover-image=FILE`
 * @property {string=} epubMetadata `--epub-metadata=FILE`
 * @property {string=} epubEmbedFont `--epub-embed-font=FILE`
 * @property {number=} epubChapterLevel `--epub-chapter-level=NUMBER`
 * @property {'all'|'none'|'best'=} ipynbOutput `--ipynb-output=all|none|best`
 * @property {string=} bibliography `--bibliography=FILE`
 * @property {string=} csl `--csl=FILE`
 * @property {string=} citationAbbreviations `--citation-abbreviations=FILE`
 * @property {boolean=} natbib `--natbib`
 * @property {boolean=} biblatex `--biblatex`
 * @property {boolean=} mathml `--mathml`
 * @property {string=} webtex `--webtex[=URL]`
 * @property {string=} mathjax `--mathjax[=URL]`
 * @property {string=} katex `--katex[=URL]`
 * @property {boolean=} gladtex `--gladtex`
 * @property {boolean=} trace `--trace`
 * @property {boolean=} dumpArgs `--dump-args`
 * @property {boolean=} ignoreArgs `--ignore-args`
 * @property {boolean=} verbose `--verbose`
 * @property {boolean=} quiet `--quiet`
 * @property {boolean=} failIfWarnings `--fail-if-warnings`
 * @property {string=} log `--log=FILE`
 * @property {boolean=} bashCompletion `--bash-completion`
 * @property {boolean=} listInputFormats `--list-input-formats`
 * @property {boolean=} listOutputFormats `--list-output-formats`
 * @property {(InputFormat|OutputFormat)=} listExtensions `--list-extensions[=FORMAT]`
 * @property {boolean=} listHighlightLanguages `--list-highlight-languages`
 * @property {boolean=} listHighlightStyles `--list-highlight-styles`
 * @property {(InputFormat|OutputFormat)=} printDefaultTemplate `--print-default-template=FORMAT`
 * @property {string=} printDefaultDataFile `--print-default-data-file=FILE`
 * @property {string=} printHighlightStyle `--print-highlight-style=STYLE|FILE`
 * @property {boolean=} version `--version`
 * @property {boolean=} help `--help`
 */
//

/** @typedef {object} PandocMetadata
 * @property {string} key The key property.
 * @property {string=} value The value property.
 */
//

/** @typedef {object} PandocVariable
 * @property {string} key The key property.
 * @property {string=} value The value property.
 */
//

/** @typedef {object} PandocRequestHeader
 * @property {string} name The name property.
 * @property {string} value The value property.
 */
//

/** @enum {string} */
exports.Literals = {
  from: '--from',
  to: '--to',
  output: '--output',
  dataDir: '--data-dir',
  metadata: '--metadata',
  metadataFile: '--metadata-file',
  defaults: '--defaults',
  fileScope: '--file-scope',
  standalone: '--standalone',
  template: '--template',
  variable: '--variable',
  wrap: '--wrap',
  ascii: '--ascii',
  toc: '--toc',
  tocDepth: '--toc-depth',
  numberSections: '--number-sections',
  numberOffset: '--number-offset',
  topLevelDivision: '--top-level-division',
  extractMedia: '--extract-media',
  resourcePath: '--resource-path',
  includeInHeader: '--include-in-header',
  includeBeforeBody: '--include-before-body',
  includeAfterBody: '--include-after-body',
  noHighlight: '--no-highlight',
  highlightStyle: '--highlight-style',
  syntaxDefinition: '--syntax-definition',
  dpi: '--dpi',
  eol: '--eol',
  columns: '--columns',
  preserveTabs: '--preserve-tabs',
  tabStop: '--tab-stop',
  pdfEngine: '--pdf-engine',
  pdfEngineOpt: '--pdf-engine-opt',
  referenceDoc: '--reference-doc',
  selfContained: '--self-contained',
  requestHeader: '--request-header',
  abbreviations: '--abbreviations',
  indentedCodeClasses: '--indented-code-classes',
  defaultImageExtension: '--default-image-extension',
  filter: '--filter',
  luaFilter: '--lua-filter',
  shiftHeadingLevelBy: '--shift-heading-level-by',
  baseHeaderLevel: '--base-header-level',
  stripEmptyParagraphs: '--strip-empty-paragraphs',
  trackChanges: '--track-changes',
  stripComments: '--strip-comments',
  referenceLinks: '--reference-links',
  referenceLocation: '--reference-location',
  atxHeaders: '--atx-headers',
  listings: '--listings',
  incremental: '--incremental',
  slideLevel: '--slide-level',
  sectionDivs: '--section-divs',
  htmlQTags: '--html-q-tags',
  emailObfuscation: '--email-obfuscation',
  idPrefix: '--id-prefix',
  titlePrefix: '--title-prefix',
  css: '--css',
  epubSubdirectory: '--epub-subdirectory',
  epubCoverImage: '--epub-cover-image',
  epubMetadata: '--epub-metadata',
  epubEmbedFont: '--epub-embed-font',
  epubChapterLevel: '--epub-chapter-level',
  ipynbOutput: '--ipynb-output',
  bibliography: '--bibliography',
  csl: '--csl',
  citationAbbreviations: '--citation-abbreviations',
  natbib: '--natbib',
  biblatex: '--biblatex',
  mathml: '--mathml',
  webtex: '--webtex',
  mathjax: '--mathjax',
  katex: '--katex',
  gladtex: '--gladtex',
  trace: '--trace',
  dumpArgs: '--dump-args',
  ignoreArgs: '--ignore-args',
  verbose: '--verbose',
  quiet: '--quiet',
  failIfWarnings: '--fail-if-warnings',
  log: '--log',
  bashCompletion: '--bash-completion',
  listInputFormats: '--list-input-formats',
  listOutputFormats: '--list-output-formats',
  listExtensions: '--list-extensions',
  listHighlightLanguages: '--list-highlight-languages',
  listHighlightStyles: '--list-highlight-styles',
  printDefaultTemplate: '--print-default-template',
  printDefaultDataFile: '--print-default-data-file',
  printHighlightStyle: '--print-highlight-style',
  version: '--version',
  help: '--help'
};

/** @enum {string} */
exports.InputFormats = {
  commonmark: 'commonmark',
  creole: 'creole',
  csv: 'csv',
  docbook: 'docbook',
  docx: 'docx',
  dokuwiki: 'dokuwiki',
  epub: 'epub',
  fb2: 'fb2',
  gfm: 'gfm',
  haddock: 'haddock',
  html: 'html',
  ipynb: 'ipynb',
  jats: 'jats',
  jira: 'jira',
  json: 'json',
  latex: 'latex',
  man: 'man',
  markdown: 'markdown',
  markdown_github: 'markdown_github',
  markdown_mmd: 'markdown_mmd',
  markdown_phpextra: 'markdown_phpextra',
  markdown_strict: 'markdown_strict',
  mediawiki: 'mediawiki',
  muse: 'muse',
  native: 'native',
  odt: 'odt',
  opml: 'opml',
  org: 'org',
  rst: 'rst',
  t2t: 't2t',
  textile: 'textile',
  tikiwiki: 'tikiwiki',
  twiki: 'twiki',
  vimwiki: 'vimwiki'
};

/** @enum {string} */
exports.OutputFormats = {
  asciidoc: 'asciidoc',
  asciidoctor: 'asciidoctor',
  beamer: 'beamer',
  commonmark: 'commonmark',
  context: 'context',
  docbook: 'docbook',
  docbook4: 'docbook4',
  docbook5: 'docbook5',
  docx: 'docx',
  dokuwiki: 'dokuwiki',
  dzslides: 'dzslides',
  epub: 'epub',
  epub2: 'epub2',
  epub3: 'epub3',
  fb2: 'fb2',
  gfm: 'gfm',
  haddock: 'haddock',
  html: 'html',
  html4: 'html4',
  html5: 'html5',
  icml: 'icml',
  ipynb: 'ipynb',
  jats: 'jats',
  jats_archiving: 'jats_archiving',
  jats_articleauthoring: 'jats_articleauthoring',
  jats_publishing: 'jats_publishing',
  jira: 'jira',
  json: 'json',
  latex: 'latex',
  man: 'man',
  markdown: 'markdown',
  markdown_github: 'markdown_github',
  markdown_mmd: 'markdown_mmd',
  markdown_phpextra: 'markdown_phpextra',
  markdown_strict: 'markdown_strict',
  mediawiki: 'mediawiki',
  ms: 'ms',
  muse: 'muse',
  native: 'native',
  odt: 'odt',
  opendocument: 'opendocument',
  opml: 'opml',
  org: 'org',
  pdf: 'pdf',
  plain: 'plain',
  pptx: 'pptx',
  revealjs: 'revealjs',
  rst: 'rst',
  rtf: 'rtf',
  s5: 's5',
  slideous: 'slideous',
  slidy: 'slidy',
  tei: 'tei',
  texinfo: 'texinfo',
  textile: 'textile',
  xwiki: 'xwiki',
  zimwiki: 'zimwiki'
};
