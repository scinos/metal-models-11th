import { useContext } from 'react';
import EleventyContext from 'eleventy-plugin-react-ssr/context';
import { HTMLPage } from './_includes/components/html-page';

function Model({ url, data }) {
    const { title } = data;
    const src = `${url}img/entry.webp`;
    const alt = `Picture of Metal Earth model ${title}`;

    return (
        <li>
            <a className="gallery-entry" href={url}>
                <figure>
                    <img src={src} height="200" width="200" alt={alt} />
                    <figcaption>{title}</figcaption>
                </figure>
            </a>
        </li>
    );
}

function Collection({ title, models }) {
    return (
        <>
            <h2>{title}</h2>
            <ul className="images">
                {models.map(({ url, data }, idx) => {
                    return <Model url={url} data={data} key={idx} />;
                })}
            </ul>
        </>
    );
}
function Index() {
    const { collections, data } = useContext(EleventyContext);

    return (
        <HTMLPage>
            {data.collections.map(({ tag, title }, idx) => {
                return (
                    <Collection
                        title={title}
                        models={collections[tag]}
                        key={idx}
                    />
                );
            })}
        </HTMLPage>
    );
}

Index.data = {
    title: 'Models',
    description: 'List of Metal Earth projects',
};

export default Index;
