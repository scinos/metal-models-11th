export function Header({ pageUrl, data }) {
    return (
        <header className="navbar">
            <a href="/" className="logo">
                <img src="/img/logo_64.png" alt="Metal Folds logo" />
                <span>Metal folds</span>
            </a>
            <nav>
                <ul>
                    {data.navbar.map(({ url, title }) => {
                        return (
                            <li className={url == pageUrl ? 'active' : ''}>
                                {' '}
                                <a href={url}>{title}</a>{' '}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
