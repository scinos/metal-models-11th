import ImageProcess from '@11ty/eleventy-img';

const OPTIONS = {
    widths: [300, 630],
    formats: ['webp'],
    urlPath: '/img/',
    outputDir: './_site/img/',
};

export function imageStats({ imagePath }) {
    const stats = ImageProcess.statsSync(imagePath, OPTIONS);
    return stats;
}

export function ImageEntry({ imagePath }) {
    ImageProcess(imagePath, OPTIONS);
    const stats = imageStats({ imagePath });

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
