import Head from 'next/head'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer';
import DetailCard from '../../components/DetailCard';
import data from "../../data/play";

export default function Develop() {
  return (
    <>
      <Head>
        <title>Play</title>
      </Head>
      <div className="denali-new-age">
        <Navbar logo="white" style={{ position: "sticky", top: "0px", zIndex: "100" }} />



        {/* Marketing */}
        <div className="container m-t-60 m-b-100">
          <div className="row has-bg-brand-300 br-lg m-b-70 overflow-hidden">
            <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-2 xl-col-1-2 p-60">
              <h6 className="upper m-b-20 is-grey-100 is-bold">Plug n’ play components</h6>
              <h1 className="m-b-20 is-grey-100">Jumpstart your project with Denali Play</h1>
              <p className="is-large is-grey-100">Denali is availbe as a CSS, React, and Ember framework. If you don’t see your platform don’t fret - we’re working on adding additional platforms.</p>
            </div>
            <div className="xs-hide sm-hide md-col-1-2 lg-col-1-2 xl-col-1-2 bg-size-cover" style={{ backgroundImage: 'linear-gradient(90deg, rgba(1,110,255,1) 0%, rgba(1,110,255,0) 60%, rgba(1,110,255,0) 75%, rgba(1,110,255,1) 99%, rgba(1,110,255,1) 100%), url("/images/play/play-cover.png")', backgroundPosition: 'center left' }}></div>
          </div>

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
          {
            data.marketingSections.map((marketingSection, index) => {
              return (
                <span key={index}>
                  <hr className="m-y-70" />
                  <div className="row m-b-20">
                    <div className="xs-col-1-1">
                      <h3>{marketingSection.name}</h3>
                    </div>
                  </div>
                  <div className="row">
                    {
                      marketingSection.items.map((item, index) => {
                        return (
                          <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3" key={index}>
                            <DetailCard
                              title={item.title}
                              description={item.description}
                              items={item.items}
                              link={item.link}
                              image={item.image}
                              tags={item.tags}
                              disabled={item.disabled}
                            />
                          </div>
                        );
                      })
                    }
                  </div>
                </span>
              );
            })
          }
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

            {
            data.applicationSections.map((marketingSection, index) => {
              return (
                <span key={index}>
                  <hr className="m-y-70" />
                  <div className="row m-b-20">
                    <div className="xs-col-1-1">
                      <h3>{marketingSection.name}</h3>
                    </div>
                  </div>
                  <div className="row">
                    {
                      marketingSection.items.map((item, index) => {
                        return (
                          <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3" key={index}>
                            <DetailCard
                              title={item.title}
                              description={item.description}
                              items={item.items}
                              link={item.link}
                              image={item.image}
                              tags={item.tags}
                              disabled={item.disabled}
                            />
                          </div>
                        );
                      })
                    }
                  </div>
                </span>
              );
            })
          }

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