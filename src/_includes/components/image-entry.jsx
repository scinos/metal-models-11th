import ImageProcess from '@11ty/eleventy-img';

export function ImageEntry({ imagePath }) {
    const options = {
        widths: [300],
        formats: ['webp'],
        urlPath: '/img/',
        outputDir: './_site/img/',
    };

    ImageProcess(imagePath, options);
    const stats = ImageProcess.statsSync(imagePath, options);

    return (
        <>
            <div style={{ backgroundImage: `url(${stats.webp[0].url}` }} />
            <img
                src={stats.webp[0].url}
                loading="lazy"
                decoding="async"
                alt=""
            />
        </>
    );
}
