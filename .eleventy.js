module.exports = ( eleventyConfig ) => {
	console.log( eleventyConfig );

	let markdownIt = require("markdown-it");
	let options = {
	  html: true,
	  breaks: true,
	  linkify: false
	};

	const mdWikilinksOptions = {
        baseURL: "/",
        makeAllLinksAbsolute: true,
        uriSuffix: "/",
        linkPattern: /\[\[([\w\s/-]+)(\|([\w\s/]+))?\]\]/,
        postProcessPageName: (pageName) => {
            return pageName.trim().toLowerCase().replace(/\s/g, "-");
        }
    }

	const md = markdownIt( options ).use( require( "@kwvanderlinde/markdown-it-wikilinks")(mdWikilinksOptions));

	eleventyConfig.addFilter("markdownify", string => {
        return md.render(string)
    })

    eleventyConfig.setLibrary('md', md);

	eleventyConfig.addPassthroughCopy('assets');
	eleventyConfig.setUseGitIgnore(false);

	return {
		dir: {
		  input: ".",
		  output: "_site",
		  includes: "_includes",
		  layouts: "_layouts",
		  data: "data",
		},
		passthroughFileCopy: true
	};
}
