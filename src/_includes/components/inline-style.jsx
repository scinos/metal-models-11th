import fs from 'fs';
import path from 'path';
import CleanCSS from 'clean-css';

export function InlineStyle({ styles = [] }) {
    const fullStyle = styles
        .map((style) => fs.readFileSync(path.resolve(__dirname, style)))
        .join('\n');
    const cleanCss = new CleanCSS().minify(fullStyle);
    return <style>{cleanCss.styles}</style>;
}
