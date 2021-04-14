import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function DefaultLayout(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div>
                <Navbar logo="white"  style={{ position: "sticky", top: "0px", zIndex: "100" }} />

                <div className="container m-y-100" style={{ paddingBottom: "280px" }}>

                    <div className="row">
                        <div className="xs-col-1-1">
                        <h1>{props.title}</h1>
                        </div>
                    </div>
                    <div className="row m-t-20">
                        <div className="xs-col-1-1 sm-col-1-1 md-col-3-4 lg-col-3-4 xl-col-3-4">
                        <p className="is-large">{props.description}</p>
                        </div>
                    </div>

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
