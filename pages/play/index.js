import Head from 'next/head'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer';
import DetailCard from '../../components/DetailCard';

export default function Develop() {
  return (
    <>
      <Head>
        <title>Play</title>
      </Head>
      <div className="denali-new-age">
        <Navbar logo="white" style={{ position: "sticky", top: "0px", zIndex: "100" }} />

        {/* Marketing */}
        <div className="container m-y-100">
          <div className="row">
            <div className="xs-col-1-1">
              <h1>Marketing</h1>
            </div>
          </div>
          <div className="row">
            <div className="xs-col-1-1 sm-col-1-1 md-col-3-4 lg-col-3-4 xl-col-3-4">
              <p className="is-large m-t-20">Got a product you need to market? Denali’s Marketing components make it easy to whip up a product website in no time.</p>
            </div>
          </div>



          <hr className="m-y-70" />

          <div className="row m-b-20">
            <div className="xs-col-1-1">
              <h3>Full Page</h3>
            </div>
          </div>

          <div className="row">
            <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
              <DetailCard
                title='Landing Page'
                description='Complete landing pages with all the bells and whistles.'
                items='3'
                link='/play/marketing/landing-page'
                image='/images/play/marketing-landing-page.png'
                tags={['Data', 'CSS', 'Button']}
              />
            </div>

            <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
              <DetailCard
                title='Landing Page'
                description='Complete landing pages with all the bells and whistles.'
                link='/play/marketing/landing-page'
                image='/images/play/marketing-landing-page.png'
              />
            </div>
          </div>
          
          
          
          
        </div>

        {/* Application Ui */}
        <div className="container-full has-bg-grey-200" style={{ background: '#002B66', paddingBottom: '280px', paddingTop: '100px' }}>
          <div className="container">
            <div className="row">
              <div className="xs-col-1-1">
                <h1>Application UI</h1>
              </div>
            </div>
            <div className="row">
              <div className="xs-col-1-1 sm-col-1-1 md-col-3-4 lg-col-3-4 xl-col-3-4">
                <p className="is-large m-t-20">Desiging for applications can be time consuming. Save time and energy without sacrafcing usability or style with Denali’s application UI components.</p>
              </div>
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