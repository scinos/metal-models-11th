import { useContext } from 'react';
import { Link } from './link';
import TwitterLogo from '../../img/twitter.svg';
import GitHubLogo from '../../img/github.svg';
import LinkedInLogo from '../../img/linkedin.svg';
import { EleventyContext } from '../../../lib/eleventy-jsx-plugin/eleventy-context';

export function Footer() {
    const { eleventy } = useContext(EleventyContext);
    const { generator } = eleventy;

    return (
        <div className="footer">
            <div className="personal-card">
                <div className="name">
                    <span>
                        <span className="prefix">by</span> Sergio Cinos
                    </span>
                </div>
                <div className="links">
                    <Link
                        href="https://twitter.com/scinos"
                        className="twitter"
                        external
                    >
                        <TwitterLogo />
                        <span>Twitter profile</span>
                    </Link>
                    <Link
                        href="https://github.com/scinos"
                        className="github"
                        external
                    >
                        <GitHubLogo />
                        <span>GitHub profile</span>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/sergiocinos/"
                        className="linkedin"
                        external
                    >
                        <LinkedInLogo />
                        <span>LinkedIn profile</span>
                    </Link>
                </div>
            </div>
            <div className="copyright">
                <Link href="https://metalfolds.page/">This work</Link> is
                licensed under{' '}
                <Link
                    href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
                    target="_blank"
                    rel="license noopener noreferrer"
                    style={{ display: 'inline-block' }}
                >
                    CC BY 4.0
                    <img
                        style={{
                            height: '22px',
                            marginLeft: '3px',
                            verticalAlign: 'text-bottom',
                        }}
                        src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                        alt="Creative Commons logo"
                    />
                    <img
                        style={{
                            height: '22px',
                            marginLeft: '3px',
                            verticalAlign: 'text-bottom',
                        }}
                        src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                        alt="Creative Commons - Attribution logo"
                    />
                </Link>
                <br />
                Built with{' '}
                <Link href="https://www.11ty.dev/" external>
                    {generator}
                </Link>
                . Source in{' '}
                <Link
                    href="https://github.com/scinos/metal-folds-11ty"
                    external
                >
                    GitHub
                </Link>
                .
            </div>
        </div>
    );
}
