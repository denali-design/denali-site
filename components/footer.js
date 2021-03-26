export default function Footer() {
    return (
        <footer className="footer inverse">

            <div className="footer-cta">
                <div className="cta-contribute">
                    <div className="cta-content">
                        <h2 className="is-grey-100">Let's build Denali together</h2>
                        <p className="is-grey-100 m-t-20">Make a component suggestion or contribute by making a pull request.</p>
                        <a href="https://github.com/denali-design" target="_blank" rel="noopener noreferrer" className="button is-outline is-inverse is-large m-t-30">
                            <i className="d-icon d-github is-small"></i>Denali Git
                        </a>
                    </div>
                    <div className="cta-img"></div>
                </div>
            </div>

            <div className="footer-links flex space-between">
                <ul>
                    <li className="header">Denali</li>
                    <li><a href="/develop">Develop</a></li>
                    <li><a href="/design">Design</a></li>
                    <li><a href="">Browsers</a></li>
                    <li><a href="">Color Checker</a></li>
                    <li><a href="/guides">Guides</a></li>
                </ul>
                <ul>
                    <li className="header">Repositories</li>
                    <li><a>CSS</a></li>
                    <li><a>Ember</a></li>
                    <li><a>Icons</a></li>
                </ul>
                <ul className="xs-hide sm-hide">
                    <li className="header">Resources</li>
                    <li><a>HTML Templates</a></li>
                    <li><a>Ui Kits</a></li>
                    <li><a>Libraries</a></li>
                </ul>
                <ul>
                    <li className="header">Support</li>
                    <li><a>Slack Org</a></li>
                    <li><a>Github Issues</a></li>
                </ul>
            </div>
            <div className="footer-social flex space-between">
                <h6 className="is-grey-600">Copyright © 2021, Verizon Media</h6>
                <div>
                    <a href="https://medium.com/denali-design" target="_blank" rel="noreferrer noopener" className="is-secondary m-l-16"><span className="d-icon d-medium is-small"></span></a>
                    <a href="https://twitter.com/denali_design" target="_blank" rel="noreferrer noopener" className="is-secondary m-l-16"><span className="d-icon d-twitter is-small"></span></a>
                    <a href="https://join.slack.com/t/denali-design/shared_invite/enQtNzk0MTE2NjU3MzE0LTM5NWFmMGFmZmFhZjVhMzdjMzYzMDQ4ZGNhZjYxNGUwMzgxMWRmODc4MWIzYTE3YzQ5OWMyM2IzMTkxZGExYWY" target="_blank" rel="noreferrer noopener" rel="noopener noreferrer" className="is-secondary m-l-16"><span className="d-icon d-slack is-small"></span></a>
                    <a href="https://github.com/denali-design" target="_blank" rel="noreferrer noopener" rel="noopener noreferrer" className="is-secondary m-l-16"><span className="d-icon d-github is-small"></span></a>
                </div>
            </div>
        </footer>
    )
}
