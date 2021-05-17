---
layout: default.njk
title: Garden Meta | Foggy Garden
date: Last Modified
---

# How does the garden grow?

## Objective

I want to edit the garden locally in markdown and publish it to WordPress.

## Organization

* Notes are written and published directly in WordPress at jeremyfelt.com with the Shortnotes plugin.
* Pages are written in markdown and published in WordPress at foggy.garden via the REST API.
* Blog posts are _______
  * Daily / weekly journals seem to fit in a markdown workflow
  * Not sure about others...
* Comments on foggy.garden pages are handled via webmention.

## Build scripts should

Some of these probably exist, others may need to be written.

- [x] Run on any push to `trunk` in a GitHub action.
- [ ] Transform all wiki-link style links into proper markdown links.
- [ ] (Temporarily) `rsync` `_site` directory to static location on foggy.garden server.
- [ ] Transform markdown into HTML.
- [ ] Transform HTML into WordPress block editor markup.
- [ ] Identify matching post type, slug, and other attributes in WordPress.
- [ ] Publish through the WordPress REST API.

## Static site generation

- [ ] What is the value in blog posts as part of jeremyfelt.com vs foggy.garden?
- [ ] How to generate a proper RSS file from a specific directory on foggy.garden.
- [ ] How to handle comments / webmentions / dynamic data storage?
- [ ] How are images handled if publishing from markdown to WordPress?
- [ ] How accurate are build dates and times on publish? (hint: this is a test)

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
- [ ] A link like `https://github.com/jeremyfelt/foggy-garden` should transform to its linked self.

## What do I expect

- [ ] I'd like filenames and slugs from something like [[digital garden]] to be `digital-garden` rather than `digital garden`.
