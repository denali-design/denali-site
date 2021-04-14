import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function PlayDetailLayout(props) {

    const breadcrumbs = props.meta.breadcrumbs;

    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div>
                <Navbar logo="white" style={{ position: "sticky", top: "0px", zIndex: "100" }} />

                <div className="container m-y-100">
                    <div className="row m-b-30 align-items-center space-between">
                        <div className="xs-col-1-1 m-10">
                            <ul className="breadcrumb">
                                {breadcrumbs.map((crumb, index) => (
                                    <li key={index}><p className="link is-secondary">{crumb}</p></li>
                                ))}
                            </ul>
                        </div>

                        <div className="xs-col-1-1">
                            <button className="button is-text is-active br-pill m-5">
                                <i className="d-icon d-css is-small"></i>
                                CSS
                            </button>
                            <button className="button is-text is-disabled br-pill m-5">
                                <i className="d-icon d-ember is-small"></i>
                                Ember
                            </button>
                            <button className="button is-text is-disabled br-pill m-5">
                                <i className="d-icon d-react is-small"></i>
                                React
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="xs-col-1-1">
                            <h1>{props.meta.title}</h1>
                        </div>
                    </div>
                    <div className="row m-t-20">
                        <div className="xs-col-1-1 sm-col-1-1 md-col-3-4 lg-col-3-4 xl-col-3-4">
                            <p className="is-large">{props.meta.description}</p>
                        </div>
                    </div>
                    <hr className="m-y-60" />
                </div>
                <div className="container denali-markdown" style={{ paddingBottom: "280px" }}>
                    {props.children}
                </div>

                {/* Footer */}
                <div className="container-full" style={{ background: '#002B66' }}>
                    <div className="container">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}
