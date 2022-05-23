import ImageProcess from '@11ty/eleventy-img';

export function Image({ imagePath, width, height }) {
    const isVertical = height > width;
    const options = {
        widths: [width, isVertical ? 350 : 700],
        outputDir: './_site/img',
    };

    ImageProcess(imagePath, options);
    const stats = ImageProcess.statsSync(imagePath, options);

    return (
        <a
            href={stats.jpeg[1].url}
            data-pswp-width={stats.jpeg[1].width}
            data-pswp-height={stats.jpeg[1].height}
        >
            <figure>
                <img
                    src={stats.webp[0].url}
                    loading="lazy"
                    decoding="async"
                    alt=""
                />
            </figure>
        </a>
    );
}
