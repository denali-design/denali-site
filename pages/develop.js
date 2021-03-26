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

        {/* Components */}
        <div className="container m-y-100">
          <div className="row">
            <div className="xs-col-1-1">
              <h1>Develop</h1>
            </div>
          </div>
          <div className="row m-t-20 ">
            <div className="xs-col-1-1 sm-col-1-1 md-col-3-4 lg-col-3-4 xl-col-3-4">
              <p className="is-large">Denali componets are availbe as a CSS or Ember framework. If you don’t see your platform don’t fret - we’re working on adding additional platforms.</p>
            </div>
          </div>
          <div className="row m-t-80 flex-wrap">
            <div className="col m-30" style={{ flex: "1 1 40%" }}>
              <div className="br-lg bg-size-cover bg-position-center-top" style={{ height: "300px", backgroundImage: 'url("/images/develop/css.png")' }}></div>
              <div className="p-y-20 p-x-30 has-bg-grey-100 m-x-40 br-lg shadow-3" style={{ marginTop: "-90px" }}>
                <h5 className="is-mono m-b-14 is-grey-600">Get Started</h5>
                <h2 className="m-b-20">CSS</h2>
                <hr></hr>
                <div className="flex m-t-20">
                  <h4><a className="m-r-50">Docs</a></h4>
                  <h4><a>View Demo</a></h4>
                </div>
              </div>
            </div>
            <div className="col m-30" style={{ flex: "1 1 40%" }}>
              <div className="br-lg bg-size-cover bg-position-center-top" style={{ height: "300px", backgroundImage: 'url("/images/develop/ember.png")' }}></div>
              <div className="p-y-20 p-x-30 has-bg-grey-100 m-x-40 br-lg shadow-3" style={{ marginTop: "-90px" }}>
                <h5 className="is-mono m-b-14 is-grey-600">Get Started</h5>
                <h2 className="m-b-20">Ember</h2>
                <hr></hr>
                <div className="flex m-t-20">
                  <h4><a className="m-r-50">Docs</a></h4>
                  <h4><a>View Demo</a></h4>
                </div>
              </div>
            </div>
          </div>
          <hr className="m-t-70 m-b-40"></hr>
          <div className="row">
            <div className="xs-col-1-1">
              <h2>Can’t find your platform?</h2>
            </div>
          </div>
          <div className="row m-t-20">
            <div className="xs-col-1-1 sm-col-1-1 md-col-3-4 lg-col-3-4 xl-col-3-4">
              <p className="is-large">If you’d like to help us build Denali in your platform of choice check out Denali’s open source <a href="https://github.com/denali-design" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="container-full has-bg-grey-200 p-y-100">
          <div className="container">
            <div className="row">
              <div className="xs-col-1-1">
                <h1>Jump right in</h1>
              </div>
            </div>
            <div className="row m-t-20 ">
              <div className="xs-col-1-1 sm-col-1-1 md-col-3-4 lg-col-3-4 xl-col-3-4">
                <p className="is-large">Along side our component frameworks we have a set of over 1000 icons availbe for with different implementations. Stay tuned for a charting libraies too.</p>
              </div>
            </div>
            <div className="row m-t-80 justify-content-center">
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
                <div className="br-lg shadow-3 has-bg-grey-100 p-10 m-x-10 m-y-20">
                  <div className="br-sm bg-size-cover bg-position-center" style={{ height: "250px", backgroundImage: 'url("/images/develop/components.png")' }}></div>
                  <h2 className="m-t-30 m-b-10 m-x-20">Components</h2>
                  <p className="m-x-20">CSS support for radio toggles, addition of the.</p>
                  <div className="flex m-t-20 m-x-20 m-b-30">
                    <h4 className="m-r-30"><a>CSS</a></h4>
                    <h4><a>Ember</a></h4>
                  </div>
                </div>
              </div>
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
                <div className="br-lg shadow-3 has-bg-grey-100 p-10 m-x-10 m-y-20">
                  <div className="br-sm bg-size-cover bg-position-center" style={{ height: "250px", backgroundImage: 'url("/images/develop/icons.png")' }}></div>
                  <h2 className="m-t-30 m-b-10 m-x-20">Icons</h2>
                  <p className="m-x-20">CSS support for radio toggles, addition of the.</p>
                  <div className="flex m-t-20 m-x-20 m-b-30">
                    <h4 className="m-r-30"><a>View Repo</a></h4>
                  </div>
                </div>
              </div>
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
                <div className="br-lg shadow-3 has-bg-grey-100 p-10 m-x-10 m-y-20">
                  <div className="br-sm bg-size-cover bg-position-center" style={{ height: "250px", backgroundImage: 'url("/images/develop/charts.png")' }}></div>
                  <h2 className="m-t-30 m-b-10 m-x-20">Charts</h2>
                  <p className="m-x-20">CSS support for radio toggles, addition of the.</p>
                  <div className="flex m-t-20 m-x-20 m-b-30">
                    <h4 className="m-r-30"><a className="is-disabled">Coming Soon</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guides */}
        <div className="container-full has-bg-grey-800 p-y-100">
          <div className="container">
            <div className="row">
              <div className="xs-col-1-1">
                <h1 className="is-grey-100">Let us guide the way</h1>
              </div>
            </div>
            <div className="row m-t-20 m-b-30">
              <div className="xs-col-1-1 sm-col-1-1 md-col-3-4 lg-col-3-4 xl-col-3-4">
                <p className="is-large is-grey-100">Looking for a quick tutorial to get you started? Our guides make it easy to start creating.</p>
              </div>
            </div>
            <a className="flex p-30 m-y-15 br-lg row align-items-center develop-page--guide-card">
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
                <h5 className="is-grey-500 is-mono m-b-18">Jan. 15 2020</h5>
                <h2 className="is-grey-100 m-b-10">Create Custom Themes</h2>
                <p className="is-grey-100 m-b-30 m-r-30">Front-end frameworks are a valuable engineering asset that reduces time spent on front-end development and that is…</p>
                <p className="is-brand-200">Keep reading</p>
              </div>
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-off-1-12 lg-col-7-12 xl-col-off-1-12 xl-col-7-12 h-50 br-sm bg-size-cover bg-position-center" style={{ height: "inherit", backgroundImage: 'url("/images/develop/custom-themes.png")' }}></div>
            </a>
            <a className="flex p-30 m-y-15 br-lg row align-items-center develop-page--guide-card">
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
                <h5 className="is-grey-500 is-mono m-b-18">Jan 12, 2020</h5>
                <h2 className="is-grey-100 m-b-10">Working with components</h2>
                <p className="is-grey-100 m-b-30 m-r-30">We built our components to be themeable by nature which means you aren’t tied to our components.</p>
                <p className="is-brand-200">Keep reading</p>
              </div>
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-off-1-12 lg-col-7-12 xl-col-off-1-12 xl-col-7-12 h-50 br-sm bg-size-cover bg-position-center" style={{ backgroundImage: 'url("/images/develop/working-with-components.png")' }}></div>
            </a>
            <hr className="m-t-60 m-b-40 has-bg-grey-700"></hr>
            <div className="row">
              <div className="xs-col-1-1">
                <h2 className="is-grey-100">Check out all of our <a href="/guides">guides</a></h2>
              </div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="container-full has-bg-grey-200 p-t-100" style={{ paddingBottom: "340px" }}>
          <div className="container">
            <div className="row">
              <div className="xs-col-1-1">
                <h1>Connect with Denali</h1>
              </div>
            </div>
            <div className="row m-t-20 ">
              <div className="xs-col-1-1 sm-col-1-1 md-col-3-4 lg-col-3-4 xl-col-3-4">
                <p className="is-large">Denali is availbe as a CSS, React, and Ember framework.</p>
              </div>
            </div>
            <div className="row m-t-80">
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-3 lg-col-1-3 xl-col-1-3">
                <a className="flex flex-column p-40 shadow-3 br-lg m-5">
                  <div className="h-12 w-12 has-bg-brand-300 br-circle flex justify-content-center align-items-center">
                    <span className="d-icon d-slack is-medium"></span>
                  </div>
                  <h5 className="is-grey-700 is-mono m-t-20">Join the community</h5>
                  <h2 className="is-brand-300 m-t-14">Slack</h2>
                  <p className="m-t-10">Community Slack</p>
                </a>
              </div>
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-3 lg-col-1-3 xl-col-1-3">
                <a className="flex flex-column p-40 shadow-3 br-lg m-5">
                  <div className="h-12 w-12 has-bg-brand-300 br-circle flex justify-content-center align-items-center">
                    <span className="d-icon d-medium is-medium"></span>
                  </div>
                  <h5 className="is-grey-700 is-mono m-t-20">Learn more</h5>
                  <h2 className="is-brand-300 m-t-14">Blog</h2>
                  <p className="m-t-10">Visit our Medium</p>
                </a>
              </div>
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-3 lg-col-1-3 xl-col-1-3">
                <a className="flex flex-column p-40 shadow-3 br-lg m-5">
                  <div className="h-12 w-12 has-bg-brand-300 br-circle flex justify-content-center align-items-center">
                    <span className="d-icon d-mail-new is-medium"></span>
                  </div>
                  <h5 className="is-grey-700 is-mono m-t-20">Contact the team</h5>
                  <h2 className="is-brand-300 m-t-14">Email</h2>
                  <p className="m-t-10">Send some mail</p>
                </a>
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