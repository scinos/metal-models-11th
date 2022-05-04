import { HTMLPage } from './_includes/components/html-page';

function Page404(props) {
    return (
        <HTMLPage {...props}>
            <div>
                The specified file was not found on this website. Please check
                the URL for mistakes and try again.
            </div>
        </HTMLPage>
    );
}

Page404.data = {
    title: '404 - Page Not Found',
    permalink: '404.html',
};

export default Page404;
