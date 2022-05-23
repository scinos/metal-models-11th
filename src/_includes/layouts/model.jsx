/* eslint-disable react/no-danger */
import { useContext } from 'react';
import EleventyContext from 'eleventy-plugin-react-ssr/context';
import path from 'path';
import fs from 'fs';
import { Link } from '../components/link';
import { Image } from '../components/image';
import { HTMLPage } from '../components/html-page';

function OfficialModel({ officialModel }) {
    if (!officialModel) return null;
    return (
        <Link href={officialModel} external>
            Official model
        </Link>
    );
}

function Images({ inputPath, width, height }) {
    const imageDir = path.join(path.dirname(inputPath), `img/`);
    const images = [];
    let idx = 0;
    let imagePath;
    while (fs.existsSync((imagePath = `${imageDir}${idx++}.jpg`))) {
        images.push(<Image {...{ imagePath, width, height }} />);
    }
    return images;
}

function Model() {
    const {
        content,
        officialModel,
        pictures: { vertical = true },
        page: { url, inputPath },
    } = useContext(EleventyContext);

    const height = vertical ? 3840 : 2160;
    const width = vertical ? 2160 : 3840;
    return (
        <HTMLPage isModel>
            <div dangerouslySetInnerHTML={{ __html: content }} />

            <OfficialModel officialModel={officialModel} />

            <div className="pswp-gallery" id="gallery">
                <Images {...{ inputPath, url, width, height }} />
            </div>
        </HTMLPage>
    );
}

export default Model;
