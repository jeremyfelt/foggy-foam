---
layout: default.njk
title: Webmentions | Projects | Foggy Garden
date: Last Modified
---

# Webmentions

## Work log

I've written a handful of posts while working with webmentions.

* [Webmentions work log 20200117](https://jeremyfelt.com/2020/01/17/webmentions-work-log-20200117/)
* [Webmentions work log 20200115](https://jeremyfelt.com/2020/01/15/webmentions-work-log-20200115/)
* [Webmentions work log 20200113](https://jeremyfelt.com/2020/01/13/webmentions-work-log-20200113/)
* [Working through displaying webmentions](https://jeremyfelt.com/2020/01/12/working-through-displaying-webmentions/)
* [Now supporting Webmention](https://jeremyfelt.com/2020/01/06/now-supporting-webmention/)

## May 15th Webmention chat

I attended the "[Webmentions Beyond Webmention.io](https://indieweb.org/2021/Pop-ups/Webmentions_Beyond_Webmention.io)" chat on May 15, 2021 and did a whole bunch of listening. The conversations sparked a bunch of thoughts in my head, but I don't have anything concrete to share yet.

A bunch of links that I gathered from tabs afterwards:

* [Session etherpad](https://etherpad.indieweb.org/Beyond_Webmention.io) for the May 15, 2021 webmention chat.
* [Webmention brainstorming](https://indieweb.org/Webmention-brainstorming)
* [W3C Webmentions](https://www.w3.org/TR/webmention/)
* [backfeed](https://indieweb.org/backfeed)
* [microsub](https://indieweb.org/Microsub)
* [microsub-spec](https://indieweb.org/Microsub-spec)
* [webmention.rocks](https://webmention.rocks/)
* [XRay](https://github.com/aaronpk/XRay) is a PHP library that "parses structured content from a URL".
* [granary.io](https://granary.io/)
* [Indieweb.xyz](https://indieweb.xyz/en) is a topical syndication site that uses webmentions.


A general receiver framework might include:

* Webmention is received from a sender
* Webmention is validated to ensure sender mentioned URL.
* (Optional) Parse for microformats to turn a "mention" into something more rich.
* (Optional) Store parsed microformat data somewhere.
* (Optional) Provide stored data.

Unprocessed thoughts:
* How to crawl a large number of sites and look for webmention or other indieweb functionality
* WordPress multisite webmention manager for arbitrary (not-necessarily WordPress) sites.
* A webmention receiver on Glitch could be forked and run by others easily.
