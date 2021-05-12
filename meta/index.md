# Garden meta

## Static site generation

- [ ] How should my garden be organized?
- [ ] How to generate a proper RSS file from a specific directory?
- [ ] How to handle comments / webmentions / dynamic data storage?

## Markdown processing
- Markdown-it https://github.com/markdown-it/markdown-it
- Markdown-it footnotes https://github.com/markdown-it/markdown-it-footnote
- Markdown-it attributes https://www.npmjs.com/package/markdown-it-attrs

## Editing text in VS Code

* `option+c` toggles todo status in markdown.
* `option` + up/down arrow moves a line up and down in its document.
* `cmd+option+v` to paste an image from the clipboard and add to attachments directory.

## Links that should work

- [ ] A link like `[[index]]` [[index]] should transform to `{root}/index.html` or `{root}/`.
- [ ] A link like `[[meta/index]]` [[meta/index]] should transform to `{root}/meta/index.html` or `{root}/meta/`.
- [ ] A link like `[Special title](meta/index.md)` [Special title](meta/index.md) should transform to `{root}/meta/index.html` or `{root}/meta/`.
- [ ] A link like `[External title](https://jeremyfelt.com)` [External title](https://jeremyfelt.com) should transform to `https://jeremyfelt.com`.
- [ ] A link like [Special title two](organization).
