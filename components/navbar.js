import Link from 'next/link'
import { useRouter } from "next/router";

const Navbar = ({ logo }) => {

    const router = useRouter();

    return (
        <nav className="nav">
            <div className="nav-left">
                <Link href="/">
                    <img className="nav-brand" src={'/images/denali-logo-' + logo + '.png'} alt=""></img>
                </Link>
                <div className="float-right hide-small-desktop-up">
                    <a className="nav-item" id="navToggle"><i className="d-icon d-more-vertical"></i></a>
                </div>
            </div>
            <div className="nav-responsive" id="navMenuContent">
                <div className="nav-center">
                    <Link href="/develop">
                        <a className={router.pathname.includes("develop") ? "nav-item is-active" : "nav-item"}>Develop</a>
                    </Link>
                    <Link href="/components">
                        <a className={router.pathname.includes("components") ? "nav-item is-active" : "nav-item"}>Components</a>
                    </Link>
                    <Link href="/design">
                        <a className={router.pathname.includes("design") ? "nav-item is-active" : "nav-item"}>Design</a>
                    </Link>
                    <Link href="/play">
                        <a className={router.pathname.includes("play") ? "nav-item is-active" : "nav-item"}>Play</a>
                    </Link>
                </div>
                <div className="nav-right">
                    <a href="" className="nav-item">
                        <i className="d-icon d-search"></i>
                        <span className="icon-name">Search</span>
                    </a>
                    <a href="https://medium.com/denali-design" target="_blank" className="nav-item">
                        <i className="d-icon d-medium"></i>
                        <span className="icon-name">Medium</span>
                    </a>
                    <a href="https://github.com/denali-design" target="_blank" className="nav-item">
                        <i className="d-icon d-github"></i>
                        <span className="icon-name">Github</span>
                    </a>
                    <div className="menu menu--nav is-right">
                        <div className="nav-item menu-trigger" tabIndex="0">
                            <i className="d-icon d-help-circle"></i>
                            <span className="icon-name">Help</span></div>
                        <div className="menu-content">
                            <a href="https://github.com/denali-design/denali-site/issues/new?labels=feature-request" target="_blank" tabIndex="0">Feature Requests</a>
                            <a href="https://github.com/denali-design/denali-site/milestones" target="_blank" tabIndex="0">Roadmap</a>
                            <a href="https://join.slack.com/t/denali-design/shared_invite/enQtNzk0MTE2NjU3MzE0LTM5NWFmMGFmZmFhZjVhMzdjMzYzMDQ4ZGNhZjYxNGUwMzgxMWRmODc4MWIzYTE3YzQ5OWMyM2IzMTkxZGExYWY" target="_blank" tabIndex="0">Slack</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;