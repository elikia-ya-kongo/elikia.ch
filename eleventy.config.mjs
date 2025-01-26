import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function(eleventyConfig) {
  eleventyConfig.setInputDirectory("pages");
  eleventyConfig.setLayoutsDirectory("../layouts");

  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("pages/downloads/*.pdf");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
};
