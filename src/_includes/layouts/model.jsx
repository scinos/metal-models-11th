/* eslint-disable react/no-danger */
import { useContext } from 'react';
import { Link } from '../components/link';
import { HTMLPage } from '../components/html-page';
import { EleventyContext } from '../../../lib/eleventy-jsx-plugin/eleventy-context';

function OfficialModel({ officialModel }) {
    if (!officialModel) return null;
    return (
        <Link href={officialModel} external>
            Official model
        </Link>
    );
}

function Image({ img, url, width, height }) {
    const scaleImg = `${url}img/${img}.jpg`;
    const scaleTumb = `${url}img/${img}_thumb.webp`;

    return (
        <a href={scaleImg} data-pswp-width={width} data-pswp-height={height}>
            <figure>
                <img src={scaleTumb} loading="lazy" alt="" />
            </figure>
        </a>
    );
}

function Model() {
    const {
        content,
        officialModel,
        verticalPictures,
        page: { url },
        pictures,
    } = useContext(EleventyContext);

    const height = verticalPictures ? 3840 : 2160;
    const width = verticalPictures ? 2160 : 3840;
    const modelImages = [...Array(pictures.model).keys()].map(
        (i) => `model_${i + 1}`
    );
    const detailImages = [...Array(pictures.detail).keys()].map(
        (i) => `detail_${i + 1}`
    );
    return (
        <HTMLPage photoswipe>
            <div dangerouslySetInnerHTML={{ __html: content }} />

            <OfficialModel officialModel={officialModel} />

            <div className="pswp-gallery" id="gallery">
                <Image img="scale" {...{ url, width, height }} />
                {modelImages.map((img, idx) => (
                    <Image {...{ img, url, width, height }} key={idx} />
                ))}
                {detailImages.map((img, idx) => (
                    <Image {...{ img, url, width, height }} key={idx} />
                ))}
            </div>
        </HTMLPage>
    );
}

export default Model;
