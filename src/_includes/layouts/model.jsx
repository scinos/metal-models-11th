import { Link } from '../components/link';
import { HTMLPage } from '../components/html-page';

const OfficialModel = ({ officialModel }) => {
    if (!officialModel) return null;
    return <Link href={officialModel}>Official model</Link>;
};

const Image = ({ img, url, width, height }) => {
    const scaleImg = `${url}img/${img}.jpg`;
    const scaleTumb = `${url}img/${img}_thumb.webp`;

    return (
        <a href={scaleImg} data-pswp-width={width} data-pswp-height={height}>
            <figure>
                <img src={scaleTumb} loading="lazy" />
            </figure>
        </a>
    );
};

function Model(props) {
    const {
        content,
        officialModel,
        verticalPictures,
        page: { url },
        pictures,
    } = props;
    const height = verticalPictures ? 3840 : 2160;
    const width = verticalPictures ? 2160 : 3840;
    const modelImages = [...Array(pictures.model).keys()].map(
        (i) => `model_${i + 1}`
    );
    const detailImages = [...Array(pictures.detail).keys()].map(
        (i) => `detail_${i + 1}`
    );
    return (
        <HTMLPage {...props}>
            <div dangerouslySetInnerHTML={{ __html: content }} />

            <OfficialModel officialModel={officialModel} />

            <div className="pswp-gallery" id="gallery">
                <Image img="scale" {...{ url, width, height }} />
                {modelImages.map((img) => (
                    <Image {...{ img, url, width, height }} />
                ))}
                {detailImages.map((img) => (
                    <Image {...{ img, url, width, height }} />
                ))}
            </div>
        </HTMLPage>
    );
}

export default Model;
