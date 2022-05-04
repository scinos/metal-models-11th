import { HTMLPage } from './_includes/components/html-page';

function Collection({ title, models }) {
    return (
        <>
            <h2>{title}</h2>
            <ul className="images">{models.map(Model)}</ul>
        </>
    );
}

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

function Index(props) {
    const { data, collections } = props;
    return (
        <HTMLPage {...props}>
            {data.collections.map(({ tag, title }) => {
                return <Collection title={title} models={collections[tag]} />;
            })}
        </HTMLPage>
    );
}

Index.data = {
    title: 'Models',
    description: 'List of Metal Earth projects',
};

export default Index;
