import Link from 'next/link'
import { useRouter } from "next/router";

const Navbar = (props) => {

    const router = useRouter();

    const toggleSidebar = () => {
        document.getElementById('sidebar').classList.toggle('show');
    }

    const toggleNavMenu = () => {
        document.getElementById('navMenuContent').classList.toggle('is-active');
    }

    return (
        <nav className="nav" {...props}>
            <div className="nav-left">
                {router.pathname.includes("components") ? <span className="nav-item md-hide lg-hide xl-hide" onClick={toggleSidebar}><i className="d-icon d-menu-hamburger"></i></span> : ''}
                {router.pathname.includes("design") ? <span className="nav-item md-hide lg-hide xl-hide" onClick={toggleSidebar}><i className="d-icon d-menu-hamburger"></i></span> : ''}
                <Link href="/">
                    <img className="nav-brand" src={`/images/denali-logo-${props.logo}.png`} alt=""></img>
                </Link>
                <div className="float-right hide-small-desktop-up">
                    <a className="nav-item" onClick={toggleNavMenu}><i className="d-icon d-more-vertical"></i></a>
                </div>
            </div>
            <div className="nav-responsive" id="navMenuContent">
                <div className="nav-center">
                    <a href="/develop" className={router.pathname.includes("develop") ? "nav-item is-active" : "nav-item"}>Develop</a>
                    <a href="/components" className={router.pathname.includes("components") ? "nav-item is-active" : "nav-item"}>Components</a>
                    <a href="/design" className={router.pathname.includes("design") ? "nav-item is-active" : "nav-item"}>Design</a>
                    <a href="/play" className={router.pathname.includes("play") ? "nav-item is-active" : "nav-item"}>Play</a>
                </div>
                <div className="nav-right">
                    <a href="https://github.com/denali-design" target="_blank" rel="noopener noreferrer" className="nav-item">
                        <i className="d-icon d-github"></i>
                        <span className="icon-name">Github</span>
                    </a>
                    <a href="https://medium.com/denali-design" target="_blank" className="nav-item">
                        <i className="d-icon d-medium"></i>
                        <span className="icon-name">Medium</span>
                    </a>
                    <div className="menu menu--nav is-right">
                        <div className="nav-item menu-trigger" tabIndex="0">
                            <i className="d-icon d-help-circle"></i>
                            <span className="icon-name">Help</span></div>
                        <div className="menu-content">
                            <a href="https://github.com/denali-design/denali-site/issues/new?labels=feature-request" target="_blank" rel="noopener noreferrer" tabIndex="0">Feature Requests</a>
                            <a href="https://github.com/denali-design/denali-site/milestones" target="_blank" rel="noopener noreferrer" tabIndex="0">Roadmap</a>
                            <a href="https://join.slack.com/t/denali-design/shared_invite/enQtNzk0MTE2NjU3MzE0LTM5NWFmMGFmZmFhZjVhMzdjMzYzMDQ4ZGNhZjYxNGUwMzgxMWRmODc4MWIzYTE3YzQ5OWMyM2IzMTkxZGExYWY" target="_blank" rel="noopener noreferrer" tabIndex="0">Slack</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
