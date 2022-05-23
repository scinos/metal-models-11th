const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const CleanCSS = require('clean-css');
const path = require('path');
const eleventyJsxPlugin = require('eleventy-plugin-react-ssr');

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter('cssmin', function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addWatchTarget('src/css');

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(eleventyJsxPlugin, {
        babelConfig: {
            cache: true,
            plugins: [['inline-react-svg', { svgo: false }]],
        },
    });

    eleventyConfig.addPassthroughCopy('src/img');

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
