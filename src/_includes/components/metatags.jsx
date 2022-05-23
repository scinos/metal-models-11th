import { useContext } from 'react';
import EleventyContext from 'eleventy-plugin-react-ssr/context';

export function Metatags() {
    const {
        title,
        page,
        description,
        pictures = {},
        data,
    } = useContext(EleventyContext);
    const { urls, identity } = data;

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
                <meta
                    property="og:image"
                    content={`${urls.main}${page.url}img/entry.jpg`}
                />
            )}

            <meta name="twitter:site" content={identity.twitterHandle} />
            <meta name="twitter:creator" content={identity.twitterHandle} />
            <meta name="twitter:card" content="summary_large_image" />
        </>
    );
}
