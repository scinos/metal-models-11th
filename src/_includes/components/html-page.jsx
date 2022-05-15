import { useContext } from 'react';
import EleventyContext from 'eleventy-plugin-react-ssr/context';
import { Header } from './header';
import { Footer } from './footer';

export function HTMLPage({ children, photoswipe }) {
    const { title, eleventy, data, page, description } =
        useContext(EleventyContext);
    const { generator } = eleventy;

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="generator" content={generator} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                {description && (
                    <meta name="description" content={description} />
                )}
                <meta name="twitter:card" content="summary" />
                <title>{title}</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Titillium+Web&amp;display=swap"
                    rel="stylesheet"
                />
                <link href="/css/style.css" rel="stylesheet" />
                {photoswipe && (
                    <link href="/css/photoswipe.css" rel="stylesheet" />
                )}
            </head>

            <body>
                <Header pageUrl={page.url} data={data} />
                asdfasdf
                <div className="content">
                    <h1>{title}</h1>
                    {children}
                </div>
                <Footer generator={generator} />
                {photoswipe && <script src="/js/photoswipe.js" />}
            </body>
        </html>
    );
}
