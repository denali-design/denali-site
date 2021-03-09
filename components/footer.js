export default function Footer() {
    return (
        <footer className="footer inverse">

            <div className="footer-cta">
                <div className="cta-contribute">
                    <div className="cta-content">
                        <h2 className="is-grey-100">Let's build Denali together</h2>
                        <p className="is-grey-100 m-t-20">Make a component suggestion or contribute by making a pull request.</p>
                        <a href="https://github.com/denali-design" target="_blank" rel="noopener noreferrer" className="button is-ghost is-inverse is-large m-t-30">
                            <i className="d-icon d-github is-small"></i>Denali Git
                        </a>
                    </div>
                    <div className="cta-img"></div>
                </div>
            </div>

            <div className="footer-links flex space-between">
                <ul>
                    <li className="header">Denali</li>
                    <li><a href="">Documentation</a></li>
                    <li><a href="">Principles</a></li>
                    <li><a href="">Browsers</a></li>
                </ul>
                <ul>
                    <li className="header">Repositories</li>
                    <li><a href="https://github.com/denali-design/denali-css" target="_blank">Components</a></li>
                    <li><a href="https://github.com/denali-design/denali-icon-font" target="_blank">Icon Font</a></li>
                    <li><a href="https://github.com/denali-design/denali-icons-svg" target="_blank">Icons SVG</a></li>
                </ul>
                <ul className="xs-hide sm-hide">
                    <li className="header">Resources</li>
                    <li><a href="">HTML Templates</a></li>
                    <li><a href="">Ui Kits</a></li>
                    <li><a href="">Libraries</a></li>
                </ul>
                <ul>
                    <li className="header">Support</li>
                    <li><a href="https://join.slack.com/t/denali-design/shared_invite/enQtNzk0MTE2NjU3MzE0LTM5NWFmMGFmZmFhZjVhMzdjMzYzMDQ4ZGNhZjYxNGUwMzgxMWRmODc4MWIzYTE3YzQ5OWMyM2IzMTkxZGExYWY" target="_blank">Slack Org</a></li>
                    <li><a href="https://github.com/denali-design/denali-site/issues" target="_blank">Github Issues</a></li>
                </ul>
            </div>
            <div className="footer-social flex space-between">
                <h6 className="is-grey-600">Copyright © 2019, Oath Inc.</h6>
                <div>
                    <a href="https://medium.com/denali-design" target="_blank" className="is-secondary m-l-16"><span className="d-icon d-medium is-small"></span></a>
                    <a href="https://twitter.com/denali_design" target="_blank" className="is-secondary m-l-16"><span className="d-icon d-twitter is-small"></span></a>
                    <a href="https://join.slack.com/t/denali-design/shared_invite/enQtNzk0MTE2NjU3MzE0LTM5NWFmMGFmZmFhZjVhMzdjMzYzMDQ4ZGNhZjYxNGUwMzgxMWRmODc4MWIzYTE3YzQ5OWMyM2IzMTkxZGExYWY" target="_blank" className="is-secondary m-l-16"><span className="d-icon d-slack is-small"></span></a>
                    <a href="https://github.com/denali-design" target="_blank" className="is-secondary m-l-16"><span className="d-icon d-github is-small"></span></a>
                </div>
            </div>
        </footer>
    )
}
