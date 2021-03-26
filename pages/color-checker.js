import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer';

export default function Develop() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="denali-new-age">
        <Navbar logo="white" style={{ position: "sticky", top: "0px", zIndex: "100" }} />
          
        <div className="container m-y-100" style={{ paddingBottom: "340px" }}>
          <div className="row">
            <div className="xs-col-1-1">
              <h1>Color Checker</h1>
            </div>
          </div>
          <div className="row m-t-20 ">
            <div className="xs-col-1-1 sm-col-1-1 md-col-3-4 lg-col-3-4 xl-col-3-4">
              <p className="is-large">Description about Denali's color checker.</p>
            </div>
          </div>
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