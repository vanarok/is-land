const EleventySveltePlugin = require("./11ty/SveltePlugin.cjs");
const EleventyVuePlugin = require("./11ty/VuePlugin.cjs");
const EleventyPreactPlugin = require("./11ty/PreactPlugin.cjs");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addPassthroughCopy("lib/**/*.{css,png,svg,js}");
  eleventyConfig.addPassthroughCopy("*.{css,js}");

  eleventyConfig.setServerOptions({
    domdiff: false,
    // enabled: false, // incompatible with the import maps example https://github.com/11ty/eleventy-dev-server/issues/31
  });

  eleventyConfig.ignores.add("README.md");

  eleventyConfig.addPlugin(EleventySveltePlugin);
  eleventyConfig.addPlugin(EleventyVuePlugin);
  eleventyConfig.addPlugin(EleventyPreactPlugin);

  eleventyConfig.addGlobalData("permalink", () => {
    return (data) => `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });

  eleventyConfig.setLibrary("md", markdownIt({ html: true }).disable('code'));

  return {
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  }
};