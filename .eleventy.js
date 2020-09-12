
module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('assets');

  eleventyConfig.addNunjucksFilter("dotdepth", function(value) {
    return (value.match(/\./g) || []).length + 1;
  });

  eleventyConfig.addNunjucksFilter("dotspacing", function(value) {
    let depth = (value.match(/\./g) || []).length;
    return '&nbsp;'.repeat(depth * 2);
  });

  return {
    dir: {
      input: "src"
    }
  };
};