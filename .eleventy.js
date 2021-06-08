const {DateTime} = require("luxon");
const fs = require("fs");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownitlinkatt = require("markdown-it-link-attributes");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownItAnchor = require("markdown-it-anchor");
const footnotes = require("eleventy-plugin-footnotes");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css/styles.css");
	eleventyConfig.addPassthroughCopy("./src/browserconfig.xml");
	eleventyConfig.addPassthroughCopy("./src/site.webmanifest");
	eleventyConfig.addPassthroughCopy("./src/admin/config.yml");
	eleventyConfig.addPassthroughCopy("./src/img");
	eleventyConfig.addPassthroughCopy("./src/ads.txt");

	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxHighlight);
	eleventyConfig.addPlugin(footnotes, {
		title: "Endnotes",
	});

	// Add a filter and a tag to parse content as Markdown in Liquid files
	eleventyConfig.addFilter("markdown", (content) => markdown(content, true));

	eleventyConfig.setDataDeepMerge(true);

	eleventyConfig.addShortcode("respimg", (path, alt, style) => {
		const fetchBase = `https://res.cloudinary.com/${eleventyConfig.cloudinaryCloudName}/image/upload/`;
		const src = `${fetchBase}q_auto,f_auto,w_400/${path}.${eleventyConfig.format}`;
		const srcset = eleventyConfig.srcsetWidths
			.map(({w, v}) => {
				return `${fetchBase}dpr_auto,q_auto,w_${w}/${path}.${eleventyConfig.format} ${v}w`;
			})
			.join(", ");

		return `<img class="${
			style ? style : ""
		}" loading="lazy" src="${src}" srcset="${srcset}" alt="${
			alt ? alt : ""
		}" width="420" height="300" sizes="100vw">`;
	});

	eleventyConfig.addShortcode("figure", (path, alt, caption) => {
		const fetchBase = `https://res.cloudinary.com/${eleventyConfig.cloudinaryCloudName}/image/upload/`;
		const src = `${fetchBase}q_auto,f_auto,w_400/${path}.${eleventyConfig.format}`;
		const srcset = eleventyConfig.srcsetWidths
			.map(({w, v}) => {
				return `${fetchBase}dpr_auto,q_auto,w_${w}/${path}.${eleventyConfig.format} ${v}w`;
			})
			.join(", ");

		return `<figure class="mb-10"><img loading="lazy" src="${src}" srcset="${srcset}" alt="${
			alt ? alt : ""
		}" width="400" height="300"><figcaption class="text-center text-sm mt-3 text-gray-600 dark:text-gray-200">${
			caption ? caption : ""
		}</figcaption></figure>`;
	});

	eleventyConfig.addShortcode("adsense", function () {
		return `<section class="py-5">
		<ins
        class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-7517538922494653"
        data-ad-slot="7775765001"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    <script type='text/javascript'>
        (function () {
            var done = false;
            var script = document.createElement('script');
            script.async = true;
            script.type = 'text/javascript';
            script.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
            var createScript = setTimeout(function () {
                document
                    .getElementsByTagName('HEAD')
                    .item(0)
                    .appendChild(script);
            }, 5000);
            script.onreadystatechange = script.onload = function (e) {
                if (! done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                }
            };
        })();
    </script>
		</section>`;
	});

	// https://github.com/eeeps/eleventy-respimg
	eleventyConfig.cloudinaryCloudName = "yansusanto";
	eleventyConfig.srcsetWidths = [
		{w: 400, v: 400},
		{w: 600, v: 600},
		{w: 768, v: 768},
		{w: 820, v: 820},
		{w: 1240, v: 1240},
	];
	eleventyConfig.format = "webp";
	eleventyConfig.fallbackWidth = 800;

	/* Markdown Overrides */
	let markdownLibrary = markdownIt({
		html: true,
		breaks: true,
	})
		.use(markdownitlinkatt, {
			pattern: /^https?:\/\//,
			attrs: {
				target: "_blank",
				rel: "noopener noreferrer",
			},
		})
		.use(markdownItAnchor, {
			permalink: true,
			permalinkClass: "direct-link text-gray-400 dark:text-gray-600",
			permalinkSymbol: "#",
			permalinkAttrs: (slug, state) => ({
				"aria-label": `permalink to ${slug}`,
				title: "Anchor link for easy sharing.",
			}),
		});
	eleventyConfig.setLibrary("md", markdownLibrary);

	eleventyConfig.addFilter("readableDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj, {zone: "utc"}).toFormat(
			"dd LLL yyyy"
		);
	});

	// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		return DateTime.fromJSDate(dateObj, {zone: "utc"}).toFormat(
			"yyyy-LL-dd"
		);
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if (n < 0) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	eleventyConfig.addCollection("tagList", function (collection) {
		let tagSet = new Set();
		collection.getAll().forEach(function (item) {
			if ("tags" in item.data) {
				let tags = item.data.tags;

				tags = tags.filter(function (item) {
					switch (item) {
						// this list should match the `filter` list in tags.njk
						case "works":
						case "posts":
						case "state":
						case "grant":
						case "fafsa":
							return false;
					}

					return true;
				});

				if (item.data.published) {
					for (const tag of tags) {
						tagSet.add(tag);
					}
				}
			}
		});

		// returning an array in addCollection works in Eleventy 0.5.3
		return [...tagSet];
	});

	return {
		dir: {
			input: "src",
			output: "_site",
			data: "_data",
			includes: "_components",
			layouts: "_layouts",
		},
	};
};

function markdown(content, inline = true) {
	const html = markdownIt({html: true}).render(content);

	return inline ? html.replace("<p>", "").replace("</p>", "") : html;
}
