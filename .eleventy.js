
module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('assets');

  eleventyConfig.addNunjucksFilter("dotdepth", function(value) {
    return (value.match(/\./g) || []).length + 1;
  })

  return {
    dir: {
      input: "src"
    }
  };
};