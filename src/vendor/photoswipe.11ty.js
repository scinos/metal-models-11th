const esbuild = require('esbuild');
const path = require('path');

class Bundle {
    data() {
        return {
            permalink: 'js/photoswipe.js',
        };
    }

    render() {
        const result = esbuild.buildSync({
            entryPoints: [path.join(__dirname, './photoswipe.js')],
            minify: true,
            write: false,
            bundle: true,
            format: 'iife',
        });
        return result.outputFiles[0].text;
    }
}

module.exports = Bundle;
