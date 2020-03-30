export type Literals = string;
export var Literals: {
    from: string;
    to: string;
    output: string;
    dataDir: string;
    metadata: string;
    metadataFile: string;
    defaults: string;
    fileScope: string;
    standalone: string;
    template: string;
    variable: string;
    wrap: string;
    ascii: string;
    toc: string;
    tocDepth: string;
    numberSections: string;
    numberOffset: string;
    topLevelDivision: string;
    extractMedia: string;
    resourcePath: string;
    includeInHeader: string;
    includeBeforeBody: string;
    includeAfterBody: string;
    noHighlight: string;
    highlightStyle: string;
    syntaxDefinition: string;
    dpi: string;
    eol: string;
    columns: string;
    preserveTabs: string;
    tabStop: string;
    pdfEngine: string;
    pdfEngineOpt: string;
    referenceDoc: string;
    selfContained: string;
    requestHeader: string;
    abbreviations: string;
    indentedCodeClasses: string;
    defaultImageExtension: string;
    filter: string;
    luaFilter: string;
    shiftHeadingLevelBy: string;
    baseHeaderLevel: string;
    stripEmptyParagraphs: string;
    trackChanges: string;
    stripComments: string;
    referenceLinks: string;
    referenceLocation: string;
    atxHeaders: string;
    listings: string;
    incremental: string;
    slideLevel: string;
    sectionDivs: string;
    htmlQTags: string;
    emailObfuscation: string;
    idPrefix: string;
    titlePrefix: string;
    css: string;
    epubSubdirectory: string;
    epubCoverImage: string;
    epubMetadata: string;
    epubEmbedFont: string;
    epubChapterLevel: string;
    ipynbOutput: string;
    bibliography: string;
    csl: string;
    citationAbbreviations: string;
    natbib: string;
    biblatex: string;
    mathml: string;
    webtex: string;
    mathjax: string;
    katex: string;
    gladtex: string;
    trace: string;
    dumpArgs: string;
    ignoreArgs: string;
    verbose: string;
    quiet: string;
    failIfWarnings: string;
    log: string;
    bashCompletion: string;
    listInputFormats: string;
    listOutputFormats: string;
    listExtensions: string;
    listHighlightLanguages: string;
    listHighlightStyles: string;
    printDefaultTemplate: string;
    printDefaultDataFile: string;
    printHighlightStyle: string;
    version: string;
    help: string;
};
export namespace InputFormats {
    export const commonmark: string;
    export const creole: string;
    export const csv: string;
    export const docbook: string;
    export const docx: string;
    export const dokuwiki: string;
    export const epub: string;
    export const fb2: string;
    export const gfm: string;
    export const haddock: string;
    export const html: string;
    export const ipynb: string;
    export const jats: string;
    export const jira: string;
    export const json: string;
    export const latex: string;
    export const man: string;
    export const markdown: string;
    export const markdown_github: string;
    export const markdown_mmd: string;
    export const markdown_phpextra: string;
    export const markdown_strict: string;
    export const mediawiki: string;
    export const muse: string;
    export const native: string;
    export const odt: string;
    export const opml: string;
    export const org: string;
    export const rst: string;
    export const t2t: string;
    export const textile: string;
    export const tikiwiki: string;
    export const twiki: string;
    export const vimwiki: string;
}
export type InputFormats = string;
export namespace OutputFormats {
    export const asciidoc: string;
    export const asciidoctor: string;
    export const beamer: string;
    const commonmark_1: string;
    export { commonmark_1 as commonmark };
    export const context: string;
    const docbook_1: string;
    export { docbook_1 as docbook };
    export const docbook4: string;
    export const docbook5: string;
    const docx_1: string;
    export { docx_1 as docx };
    const dokuwiki_1: string;
    export { dokuwiki_1 as dokuwiki };
    export const dzslides: string;
    const epub_1: string;
    export { epub_1 as epub };
    export const epub2: string;
    export const epub3: string;
    const fb2_1: string;
    export { fb2_1 as fb2 };
    const gfm_1: string;
    export { gfm_1 as gfm };
    const haddock_1: string;
    export { haddock_1 as haddock };
    const html_1: string;
    export { html_1 as html };
    export const html4: string;
    export const html5: string;
    export const icml: string;
    const ipynb_1: string;
    export { ipynb_1 as ipynb };
    const jats_1: string;
    export { jats_1 as jats };
    export const jats_archiving: string;
    export const jats_articleauthoring: string;
    export const jats_publishing: string;
    const jira_1: string;
    export { jira_1 as jira };
    const json_1: string;
    export { json_1 as json };
    const latex_1: string;
    export { latex_1 as latex };
    const man_1: string;
    export { man_1 as man };
    const markdown_1: string;
    export { markdown_1 as markdown };
    const markdown_github_1: string;
    export { markdown_github_1 as markdown_github };
    const markdown_mmd_1: string;
    export { markdown_mmd_1 as markdown_mmd };
    const markdown_phpextra_1: string;
    export { markdown_phpextra_1 as markdown_phpextra };
    const markdown_strict_1: string;
    export { markdown_strict_1 as markdown_strict };
    const mediawiki_1: string;
    export { mediawiki_1 as mediawiki };
    export const ms: string;
    const muse_1: string;
    export { muse_1 as muse };
    const native_1: string;
    export { native_1 as native };
    const odt_1: string;
    export { odt_1 as odt };
    export const opendocument: string;
    const opml_1: string;
    export { opml_1 as opml };
    const org_1: string;
    export { org_1 as org };
    export const pdf: string;
    export const plain: string;
    export const pptx: string;
    export const revealjs: string;
    const rst_1: string;
    export { rst_1 as rst };
    export const rtf: string;
    export const s5: string;
    export const slideous: string;
    export const slidy: string;
    export const tei: string;
    export const texinfo: string;
    const textile_1: string;
    export { textile_1 as textile };
    export const xwiki: string;
    export const zimwiki: string;
}
export type OutputFormats = string;
export type InputFormat = "native" | "html" | "json" | "commonmark" | "creole" | "csv" | "docbook" | "docx" | "dokuwiki" | "epub" | "fb2" | "gfm" | "haddock" | "ipynb" | "jats" | "jira" | "latex" | "man" | "markdown" | "markdown_github" | "markdown_mmd" | "markdown_phpextra" | "markdown_strict" | "mediawiki" | "muse" | "odt" | "opml" | "org" | "rst" | "t2t" | "textile" | "tikiwiki" | "twiki" | "vimwiki";
export type OutputFormat = "native" | "html" | "json" | "commonmark" | "docbook" | "docx" | "dokuwiki" | "epub" | "fb2" | "gfm" | "haddock" | "ipynb" | "jats" | "jira" | "latex" | "man" | "markdown" | "markdown_github" | "markdown_mmd" | "markdown_phpextra" | "markdown_strict" | "mediawiki" | "muse" | "odt" | "opml" | "org" | "rst" | "textile" | "asciidoc" | "asciidoctor" | "beamer" | "context" | "docbook4" | "docbook5" | "dzslides" | "epub2" | "epub3" | "html4" | "html5" | "icml" | "jats_archiving" | "jats_articleauthoring" | "jats_publishing" | "ms" | "opendocument" | "pdf" | "plain" | "pptx" | "revealjs" | "rtf" | "s5" | "slideous" | "slidy" | "tei" | "texinfo" | "xwiki" | "zimwiki";
export type PandocOptions = {
    /**
     * `--from=FORMAT`
     */
    from?: "native" | "html" | "json" | "commonmark" | "creole" | "csv" | "docbook" | "docx" | "dokuwiki" | "epub" | "fb2" | "gfm" | "haddock" | "ipynb" | "jats" | "jira" | "latex" | "man" | "markdown" | "markdown_github" | "markdown_mmd" | "markdown_phpextra" | "markdown_strict" | "mediawiki" | "muse" | "odt" | "opml" | "org" | "rst" | "t2t" | "textile" | "tikiwiki" | "twiki" | "vimwiki";
    /**
     * `--to=FORMAT`
     */
    to?: "native" | "html" | "json" | "commonmark" | "docbook" | "docx" | "dokuwiki" | "epub" | "fb2" | "gfm" | "haddock" | "ipynb" | "jats" | "jira" | "latex" | "man" | "markdown" | "markdown_github" | "markdown_mmd" | "markdown_phpextra" | "markdown_strict" | "mediawiki" | "muse" | "odt" | "opml" | "org" | "rst" | "textile" | "asciidoc" | "asciidoctor" | "beamer" | "context" | "docbook4" | "docbook5" | "dzslides" | "epub2" | "epub3" | "html4" | "html5" | "icml" | "jats_archiving" | "jats_articleauthoring" | "jats_publishing" | "ms" | "opendocument" | "pdf" | "plain" | "pptx" | "revealjs" | "rtf" | "s5" | "slideous" | "slidy" | "tei" | "texinfo" | "xwiki" | "zimwiki";
    /**
     * `--output=FILE`
     */
    output?: string;
    /**
     * `--data-dir=DIRECTORY`
     */
    dataDir?: string;
    /**
     * `--metadata=KEY[:VALUE]`
     */
    metadata?: PandocMetadata[];
    /**
     * `--metadata-file=FILE`
     */
    metadataFile?: string;
    /**
     * `--defaults=FILE`
     */
    defaults?: string;
    /**
     * `--file-scope`
     */
    fileScope?: boolean;
    /**
     * `--standalone`
     */
    standalone?: boolean;
    /**
     * `--template=FILE`
     */
    template?: string;
    /**
     * `--variable=KEY[:VALUE]`
     */
    variable?: PandocVariable[];
    /**
     * `--wrap=auto|none|preserve`
     */
    wrap?: "auto" | "none" | "preserve";
    /**
     * `--ascii`
     */
    ascii?: boolean;
    /**
     * `--toc`
     */
    toc?: boolean;
    /**
     * `--toc-depth=NUMBER`
     */
    tocDepth?: number;
    /**
     * `--number-sections`
     */
    numberSections?: boolean;
    /**
     * `--number-offset=NUMBERS`
     */
    numberOffset?: string;
    /**
     * `--top-level-division=section|chapter|part`
     */
    topLevelDivision?: "section" | "chapter" | "part";
    /**
     * `--extract-media=PATH`
     */
    extractMedia?: string;
    /**
     * `--resource-path=SEARCHPATH`
     */
    resourcePath?: string;
    /**
     * `--include-in-header=FILE`
     */
    includeInHeader?: string;
    /**
     * `--include-before-body=FILE`
     */
    includeBeforeBody?: string;
    /**
     * `--include-after-body=FILE`
     */
    includeAfterBody?: string;
    /**
     * `--no-highlight`
     */
    noHighlight?: boolean;
    /**
     * `--highlight-style=STYLE|FILE`
     */
    highlightStyle?: string;
    /**
     * `--syntax-definition=FILE`
     */
    syntaxDefinition?: string;
    /**
     * `--dpi=NUMBER`
     */
    dpi?: number;
    /**
     * `--eol=crlf|lf|native`
     */
    eol?: "native" | "crlf" | "lf";
    /**
     * `--columns=NUMBER`
     */
    columns?: number;
    /**
     * `--preserve-tabs`
     */
    preserveTabs?: boolean;
    /**
     * `--tab-stop=NUMBER`
     */
    tabStop?: number;
    /**
     * `--pdf-engine=PROGRAM`
     */
    pdfEngine?: string;
    /**
     * `--pdf-engine-opt=STRING`
     */
    pdfEngineOpt?: string;
    /**
     * `--reference-doc=FILE`
     */
    referenceDoc?: string;
    /**
     * `--self-contained`
     */
    selfContained?: boolean;
    /**
     * `--request-header=NAME:VALUE`
     */
    requestHeader?: PandocRequestHeader[];
    /**
     * `--abbreviations=FILE`
     */
    abbreviations?: string;
    /**
     * `--indented-code-classes=STRING`
     */
    indentedCodeClasses?: string;
    /**
     * `--default-image-extension=extension`
     */
    defaultImageExtension?: string;
    /**
     * `--filter=PROGRAM`
     */
    filter?: string;
    /**
     * `--lua-filter=SCRIPTPATH`
     */
    luaFilter?: string;
    /**
     * `--shift-heading-level-by=NUMBER`
     */
    shiftHeadingLevelBy?: number;
    /**
     * `--base-header-level=NUMBER`
     */
    baseHeaderLevel?: number;
    /**
     * `--strip-empty-paragraphs`
     */
    stripEmptyParagraphs?: boolean;
    /**
     * `--track-changes=accept|reject|all`
     */
    trackChanges?: "all" | "reject" | "accept";
    /**
     * `--strip-comments`
     */
    stripComments?: boolean;
    /**
     * `--reference-links`
     */
    referenceLinks?: boolean;
    /**
     * `--reference-location=block|section|document`
     */
    referenceLocation?: "section" | "document" | "block";
    /**
     * `--atx-headers`
     */
    atxHeaders?: boolean;
    /**
     * `--listings`
     */
    listings?: boolean;
    /**
     * `--incremental`
     */
    incremental?: boolean;
    /**
     * `--slide-level=NUMBER`
     */
    slideLevel?: number;
    /**
     * `--section-divs`
     */
    sectionDivs?: boolean;
    /**
     * `--html-q-tags`
     */
    htmlQTags?: boolean;
    /**
     * `--email-obfuscation=none|javascript|references`
     */
    emailObfuscation?: "none" | "javascript" | "references";
    /**
     * `--id-prefix=STRING`
     */
    idPrefix?: string;
    /**
     * `--title-prefix=STRING`
     */
    titlePrefix?: string;
    /**
     * `--css=URL`
     */
    css?: string;
    /**
     * `--epub-subdirectory=DIRNAME`
     */
    epubSubdirectory?: string;
    /**
     * `--epub-cover-image=FILE`
     */
    epubCoverImage?: string;
    /**
     * `--epub-metadata=FILE`
     */
    epubMetadata?: string;
    /**
     * `--epub-embed-font=FILE`
     */
    epubEmbedFont?: string;
    /**
     * `--epub-chapter-level=NUMBER`
     */
    epubChapterLevel?: number;
    /**
     * `--ipynb-output=all|none|best`
     */
    ipynbOutput?: "all" | "none" | "best";
    /**
     * `--bibliography=FILE`
     */
    bibliography?: string;
    /**
     * `--csl=FILE`
     */
    csl?: string;
    /**
     * `--citation-abbreviations=FILE`
     */
    citationAbbreviations?: string;
    /**
     * `--natbib`
     */
    natbib?: boolean;
    /**
     * `--biblatex`
     */
    biblatex?: boolean;
    /**
     * `--mathml`
     */
    mathml?: boolean;
    /**
     * `--webtex[=URL]`
     */
    webtex?: string;
    /**
     * `--mathjax[=URL]`
     */
    mathjax?: string;
    /**
     * `--katex[=URL]`
     */
    katex?: string;
    /**
     * `--gladtex`
     */
    gladtex?: boolean;
    /**
     * `--trace`
     */
    trace?: boolean;
    /**
     * `--dump-args`
     */
    dumpArgs?: boolean;
    /**
     * `--ignore-args`
     */
    ignoreArgs?: boolean;
    /**
     * `--verbose`
     */
    verbose?: boolean;
    /**
     * `--quiet`
     */
    quiet?: boolean;
    /**
     * `--fail-if-warnings`
     */
    failIfWarnings?: boolean;
    /**
     * `--log=FILE`
     */
    log?: string;
    /**
     * `--bash-completion`
     */
    bashCompletion?: boolean;
    /**
     * `--list-input-formats`
     */
    listInputFormats?: boolean;
    /**
     * `--list-output-formats`
     */
    listOutputFormats?: boolean;
    /**
     * `--list-extensions[=FORMAT]`
     */
    listExtensions?: "native" | "html" | "json" | "commonmark" | "creole" | "csv" | "docbook" | "docx" | "dokuwiki" | "epub" | "fb2" | "gfm" | "haddock" | "ipynb" | "jats" | "jira" | "latex" | "man" | "markdown" | "markdown_github" | "markdown_mmd" | "markdown_phpextra" | "markdown_strict" | "mediawiki" | "muse" | "odt" | "opml" | "org" | "rst" | "t2t" | "textile" | "tikiwiki" | "twiki" | "vimwiki" | "asciidoc" | "asciidoctor" | "beamer" | "context" | "docbook4" | "docbook5" | "dzslides" | "epub2" | "epub3" | "html4" | "html5" | "icml" | "jats_archiving" | "jats_articleauthoring" | "jats_publishing" | "ms" | "opendocument" | "pdf" | "plain" | "pptx" | "revealjs" | "rtf" | "s5" | "slideous" | "slidy" | "tei" | "texinfo" | "xwiki" | "zimwiki";
    /**
     * `--list-highlight-languages`
     */
    listHighlightLanguages?: boolean;
    /**
     * `--list-highlight-styles`
     */
    listHighlightStyles?: boolean;
    /**
     * `--print-default-template=FORMAT`
     */
    printDefaultTemplate?: "native" | "html" | "json" | "commonmark" | "creole" | "csv" | "docbook" | "docx" | "dokuwiki" | "epub" | "fb2" | "gfm" | "haddock" | "ipynb" | "jats" | "jira" | "latex" | "man" | "markdown" | "markdown_github" | "markdown_mmd" | "markdown_phpextra" | "markdown_strict" | "mediawiki" | "muse" | "odt" | "opml" | "org" | "rst" | "t2t" | "textile" | "tikiwiki" | "twiki" | "vimwiki" | "asciidoc" | "asciidoctor" | "beamer" | "context" | "docbook4" | "docbook5" | "dzslides" | "epub2" | "epub3" | "html4" | "html5" | "icml" | "jats_archiving" | "jats_articleauthoring" | "jats_publishing" | "ms" | "opendocument" | "pdf" | "plain" | "pptx" | "revealjs" | "rtf" | "s5" | "slideous" | "slidy" | "tei" | "texinfo" | "xwiki" | "zimwiki";
    /**
     * `--print-default-data-file=FILE`
     */
    printDefaultDataFile?: string;
    /**
     * `--print-highlight-style=STYLE|FILE`
     */
    printHighlightStyle?: string;
    /**
     * `--version`
     */
    version?: boolean;
    /**
     * `--help`
     */
    help?: boolean;
};
export type PandocMetadata = {
    /**
     * The key property.
     */
    key: string;
    /**
     * The value property.
     */
    value?: string;
};
export type PandocVariable = {
    /**
     * The key property.
     */
    key: string;
    /**
     * The value property.
     */
    value?: string;
};
export type PandocRequestHeader = {
    /**
     * The name property.
     */
    name: string;
    /**
     * The value property.
     */
    value: string;
};
