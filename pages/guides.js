import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import GuidesCard from '../components/guides-card';
import data from "../data/splash";

export default function Design() {
  return (
    <>
      <Head>
        <title>Guides</title>
      </Head>
      <div className="denali-new-age">
        <Navbar logo="white" />

        <div className="container m-y-100" style={{ paddingBottom: "280px" }}>
          <div className="row">
            <div className="xs-col-1-1">
              <h1>Guides</h1>
            </div>
          </div>
          <div className="row m-t-20 ">
            <div className="xs-col-1-1 sm-col-1-1 md-col-3-4 lg-col-3-4 xl-col-3-4">
              <p className="is-large">Choose a guide to get started with Denali.</p>
            </div>
          </div>
          <div className="row flex-wrap m-t-50">
          {
              data.guides.map((guide) => {
                return (
                  <GuidesCard
                    title={guide.title}
                    type={guide.type}
                    icon={guide.icon}
                    image={guide.image}
                    link={guide.link}
                    external={guide.external}
                  />
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