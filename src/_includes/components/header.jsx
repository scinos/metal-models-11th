import { useContext } from 'react';
import { EleventyContext } from '../../../lib/eleventy-jsx-plugin/eleventy-context';

export function Header() {
    const { data, page } = useContext(EleventyContext);
    return (
        <header className="navbar">
            <a href="/" className="logo">
                <img src="/img/logo_64.png" alt="Metal Folds logo" />
                <span>Metal folds</span>
            </a>
            <nav>
                <ul>
                    {data.navbar.map(({ url, title }, idx) => {
                        return (
                            <li
                                key={idx}
                                className={url === page.url ? 'active' : ''}
                            >
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
