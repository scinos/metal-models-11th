const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const CleanCSS = require('clean-css');
const path = require('path');
const eleventyJsxPlugin = require('eleventy-plugin-react-ssr');

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

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(eleventyJsxPlugin, {
        babelConfig: {
            plugins: [['inline-react-svg', { svgo: false }]],
        },
    });

    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.addPassthroughCopy('src/models/**/*.webp');
    eleventyConfig.addPassthroughCopy('src/models/**/*.jpg');

    eleventyConfig.addPassthroughCopy({
        [require.resolve('photoswipe/style.css')]: '/css/photoswipe.css',
    });

    return {
        passthroughFileCopy: true,
        dir: {
            input: 'src',
        },
    };
};
