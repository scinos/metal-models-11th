import path from 'path';
import { ImageEntry } from './image-entry';

function Model({ url, data, inputPath }) {
    const {
        title,
        pictures: { entry, vertical = false },
    } = data;
    const imageDir = path.join(path.dirname(inputPath), `img/`);

    const imagePath = `${imageDir}/${entry}.jpg`;
    const height = vertical ? 3840 : 2160;
    const width = vertical ? 2160 : 3840;

    return (
        <li>
            <a className="gallery-entry" href={url}>
                <figure>
                    <ImageEntry
                        imagePath={imagePath}
                        height={height}
                        width={width}
                    />
                    <figcaption>{title}</figcaption>
                </figure>
            </a>
        </li>
    );
}

export function Collection({ title, models }) {
    return (
        <>
            <h2>{title}</h2>
            <ul className="images">
                {models
                    .sort((a, b) => a.data.title.localeCompare(b.data.title))
                    .map(({ url, data, inputPath }, idx) => {
                        if (!data.pictures.entry) return null;
                        return (
                            <Model
                                url={url}
                                inputPath={inputPath}
                                data={data}
                                key={idx}
                            />
                        );
                    })}
            </ul>
        </>
    );
}
