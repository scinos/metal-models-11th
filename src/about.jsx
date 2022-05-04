import { Link } from './_includes/components/link';
import { HTMLPage } from './_includes/components/html-page';

function AboutPage(props) {
    return (
        <HTMLPage {...props}>
            <p>I'm Sergio, a Software Engineer from Spain.</p>
            <p>
                A couple of years ago I discovered a{' '}
                <Link external href="https://www.metalearth.com/">
                    Metal Earth model
                </Link>{' '}
                in a gift shop. I bought a cheap one just to try it out and I
                was immediately hooked! Since then I've built dozens of model
                and my collection is expanding every week.
            </p>

            <p>This page is a collection of the models I've built so far.</p>
        </HTMLPage>
    );
}

AboutPage.data = {
    title: 'About me',
};

export default AboutPage;
