const ReactDOMServer = require('react-dom/server');
const path = require('path');

const template = () => {
    let requirePath;
    return {
        init() {
            requirePath = path.resolve('.');
            require('@babel/register')({
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                node: 'current',
                            },
                            bugfixes: true,
                            modules: 'cjs',
                        },
                    ],
                    [
                        '@babel/preset-react',
                        {
                            runtime: 'automatic',
                        },
                    ],
                ],
                plugins: [['inline-react-svg', { svgo: false }]],
            });
        },
        getData: true,
        getInstanceFromInputPath(inputPath) {
            // eslint-disable-next-line import/no-dynamic-require, global-require
            return require(path.join(requirePath, inputPath)).default;
        },
        read: false,
        compile: async (inputContent, inputPath) => {
            // eslint-disable-next-line import/no-dynamic-require, global-require
            const renderer = require(path.join(requirePath, inputPath)).default;
            return async (props) => {
                return `<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(
                    renderer(props)
                )}`;
            };
        },
        compileOptions: {
            cache: true,
            permalink: 'raw',
        },
    };
};

module.exports = (eleventyConfig) => {
    eleventyConfig.addTemplateFormats('jsx');
    eleventyConfig.addExtension('jsx', template());
};
