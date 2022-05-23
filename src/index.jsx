import { useContext } from 'react';
import EleventyContext from 'eleventy-plugin-react-ssr/context';
import { HTMLPage } from './_includes/components/html-page';
import { Collection } from './_includes/components/collection';

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
