import { useContext } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { EleventyContext } from '../../../lib/eleventy-jsx-plugin/eleventy-context';

export function HTMLPage({ children }) {
    const { title, eleventy, data, page } = useContext(EleventyContext);
    const { generator } = eleventy;

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="generator" content={generator} />
                <title>{title}</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Titillium+Web&amp;display=swap"
                    rel="stylesheet"
                />
                <link href="/css/style.css" rel="stylesheet" />
                <link href="/css/photoswipe.css" rel="stylesheet" />
            </head>

            <body>
                <Header pageUrl={page.url} data={data} />

                <div className="content">
                    <h1>{title}</h1>
                    {children}
                </div>

                <Footer generator={generator} />

                {/*

{%if tags | isModel %}
  <script src="/js/photoswipe.js"></script>
{%endif%} */}
            </body>
        </html>
    );
}
