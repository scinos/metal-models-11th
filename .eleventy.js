const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const CleanCSS = require('clean-css');
const path = require('path');

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter('cssmin', function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addFilter('isModel', function (tags) {
        return tags?.includes('model');
    });

    eleventyConfig.addNunjucksShortcode('resolve', function (path) {
        return require.resolve(path);
    });
    eleventyConfig.addNunjucksGlobal(
        'externalLink',
        'target="_blank" rel="noopener noreferrer"'
    );

    eleventyConfig.addWatchTarget('src/css');

    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('model', 'layouts/model.njk');
    eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');

    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.addPassthroughCopy('src/models/**/*.webp');
    eleventyConfig.addPassthroughCopy('src/models/**/*.jpg');

    eleventyConfig.addPassthroughCopy({
        [require.resolve('photoswipe/style.css')]: '/css/photoswipe.css',
    });

    return {
        passthroughFileCopy: true,
    };
};
