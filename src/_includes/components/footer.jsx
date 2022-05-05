import { useContext } from 'react';
import { Link } from './link';
import TwitterLogo from '../../img/twitter.svg';
import GitHubLogo from '../../img/github.svg';
import LinkedInLogo from '../../img/linkedin.svg';
import { EleventyContext } from '../../../lib/eleventy-jsx-plugin/eleventy-context';

export function Footer() {
    const {
        eleventy: { generator },
        data,
    } = useContext(EleventyContext);
    const { repo, github, twitter, linkedin, main, eleventy } = data.urls;

    return (
        <div className="footer">
            <div className="personal-card">
                <div className="name">
                    <span>
                        <span className="prefix">by</span> Sergio Cinos
                    </span>
                </div>
                <div className="links">
                    <Link href={twitter} className="twitter" external>
                        <TwitterLogo />
                        <span>Twitter profile</span>
                    </Link>
                    <Link href={github} className="github" external>
                        <GitHubLogo />
                        <span>GitHub profile</span>
                    </Link>
                    <Link href={linkedin} className="linkedin" external>
                        <LinkedInLogo />
                        <span>LinkedIn profile</span>
                    </Link>
                </div>
            </div>
            <div className="copyright">
                <Link href={main}>This work</Link> is licensed under{' '}
                <Link
                    href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
                    external
                    rel={['license']}
                >
                    CC BY 4.0
                    <img
                        className="cc-logo"
                        src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                        alt="Creative Commons logo"
                    />
                    <img
                        className="cc-logo"
                        src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                        alt="Creative Commons - Attribution logo"
                    />
                </Link>
                <br />
                Built with{' '}
                <Link href={eleventy} external>
                    {generator}
                </Link>
                . Source in{' '}
                <Link href={repo} external>
                    {' '}
                    GitHub{' '}
                </Link>
                .
            </div>
        </div>
    );
}
