
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function(eleventyConfig) {

  eleventyConfig.addNunjucksFilter("dotdepth", function(value) {
    return (value.match(/\./g) || []).length + 1;
  });

  eleventyConfig.addNunjucksFilter("dotspacing", function(value) {
    let depth = (value.match(/\./g) || []).length;
    return '&nbsp;'.repeat(depth * 2);
  });

  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('favicon.ico');

  let m = markdownIt({ html: true });
  m.use(markdownItAttrs);

  eleventyConfig.setLibrary("md", m);

  return {
    dir: {
      input: "src"
    }
  };
};