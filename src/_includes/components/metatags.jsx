import { useContext } from 'react';
import EleventyContext from 'eleventy-plugin-react-ssr/context';
import path from 'path';
import { imageStats } from './image-entry';

export function Metatags() {
    const { title, page, description, pictures, data } =
        useContext(EleventyContext);
    const { urls, identity } = data;
    const { inputPath } = page;
    const { entry } = pictures;

    const imageDir = path.join(path.dirname(inputPath), `img/`);
    const imagePath = `${imageDir}/${entry}.jpg`;

    const stats = imageStats({ imagePath });
    const imageUrl = stats.webp[1].url;

    return (
        <>
            <meta property="og:title" content={title} />

            {description && (
                <>
                    <meta name="description" content={description} />
                    <meta property="og:description" content={description} />
                </>
            )}
            <meta property="og:url" content={`${urls.main}${page.url}`} />
            <meta property="og:type" content="website" />
            {pictures.entry && (
                <meta property="og:image" content={`${urls.main}${imageUrl}`} />
            )}

            <meta name="twitter:site" content={identity.twitterHandle} />
            <meta name="twitter:creator" content={identity.twitterHandle} />
            <meta name="twitter:card" content="summary_large_image" />
        </>
    );
}
