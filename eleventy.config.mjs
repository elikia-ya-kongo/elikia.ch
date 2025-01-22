export default function(eleventyConfig) {
  eleventyConfig.setInputDirectory("pages");
  eleventyConfig.setInputDirectory("../layouts");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("images");
};
