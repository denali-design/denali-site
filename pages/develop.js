import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer';

export default function Develop() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
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
            <div className="col m-30" style={{ flex: "1 1 50%" }}>
              <div className="br-lg bg-size-cover bg-position-center-top" style={{ height: "300px", backgroundImage: 'url("/images/develop/css.png")' }}></div>
              <div className="p-y-20 p-x-30 has-bg-grey-100 m-x-40 br-lg shadow-3" style={{ marginTop: "-90px" }}>
                <h5 className="is-mono m-b-14 is-grey-600">Get Started</h5>
                <h3 className="m-b-20">CSS</h3>
                <hr></hr>
                <div className="flex m-t-20">
                  <h4>
                    <a
                      className="m-r-50"
                      href="https://denali-design.github.io/denali-css"
                      target="_blank"
                      rel="noreferrer noopener"
                    >Docs</a>
                  </h4>
                  <h4><a className="is-disabled">View Demo</a></h4>
                </div>
              </div>
            </div>
            <div className="col m-30" style={{ flex: "1 1 40%" }}>
              <div className="br-lg bg-size-cover bg-position-center-top" style={{ height: "300px", backgroundImage: 'url("/images/develop/ember.png")' }}></div>
              <div className="p-y-20 p-x-30 has-bg-grey-100 m-x-40 br-lg shadow-3" style={{ marginTop: "-90px" }}>
                <h5 className="is-mono m-b-14 is-grey-600">Get Started</h5>
                <h3 className="m-b-20">Ember</h3>
                <hr></hr>
                <div className="flex m-t-20">
                  <h4>
                    <a
                      className="m-r-50"
                      href="https://denali-design.github.io/denali-ember/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >Docs</a>
                  </h4>
                  <h4>
                    <a 
                      href="https://denali-design.github.io/denali-ember/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >View Demo</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col m-30" style={{ flex: "1 1 40%" }}>
              <div className="br-lg bg-size-cover bg-position-center-top" style={{ height: "300px", backgroundImage: 'url("/images/develop/react.png")' }}></div>
              <div className="p-y-20 p-x-30 has-bg-grey-100 m-x-40 br-lg shadow-3" style={{ marginTop: "-90px" }}>
                <h5 className="is-mono m-b-14 is-grey-600">Get Started</h5>
                <h3 className="m-b-20">React</h3>
                <hr></hr>
                <div className="flex m-t-20">
                  <h4>
                    <a
                      className="m-r-50"
                      href="https://denali-design.github.io/denali-react"
                      target="_blank"
                      rel="noreferrer noopener"
                    >Docs</a>
                  </h4>
                  <h4><a className="is-disabled">View Demo</a></h4>
                </div>
              </div>
            </div>
          </div>
          <hr className="m-t-70 m-b-40"></hr>
          <div className="row">
            <div className="xs-col-1-1">
              <h3>Can’t find your platform?</h3>
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
                  <h3 className="m-t-30 m-b-10 m-x-20">Components</h3>
                  <p className="m-x-20">25 components built with a minimal footprint and themeable.</p>
                  <div className="flex m-t-20 m-x-20 m-b-30">
                    <h4 className="m-r-30">
                      <a
                        href="https://github.com/denali-design/denali-css"
                        target="_blank"
                        rel="noreferrer noopener"
                      >CSS</a>
                    </h4>
                    <h4 className="m-r-30">
                      <a
                        href="https://github.com/denali-design/denali-ember"
                        target="_blank"
                        rel="noreferrer noopener"
                      >Ember</a>
                    </h4>
                    <h4>
                      <a
                        disabled
                      >React</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
                <div className="br-lg shadow-3 has-bg-grey-100 p-10 m-x-10 m-y-20">
                  <div className="br-sm bg-size-cover bg-position-center" style={{ height: "250px", backgroundImage: 'url("/images/develop/icons.png")' }}></div>
                  <h3 className="m-t-30 m-b-10 m-x-20">Icons</h3>
                  <p className="m-x-20">We have an icon for almost anything and if we don't just ask.</p>
                  <div className="flex m-t-20 m-x-20 m-b-30">
                    <h4 className="m-r-30">
                      <a
                        href="https://github.com/denali-design/denali-icons"
                        target="_blank"
                        rel="noreferrer noopener"
                      >GitHub</a>
                    </h4>
                    <h4>
                      <a
                        href="/icons"
                      >View Catalog</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
                <div className="br-lg shadow-3 has-bg-grey-100 p-10 m-x-10 m-y-20">
                  <div className="br-sm bg-size-cover bg-position-center" style={{ height: "250px", backgroundImage: 'url("/images/develop/charts.png")' }}></div>
                  <h3 className="m-t-30 m-b-10 m-x-20">Charts</h3>
                  <p className="m-x-20">A charting library that looks good even with a huge amount of data.</p>
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
            <a
              className="flex p-30 m-y-15 br-lg row align-items-center develop-page--guide-card"
              href="https://medium.com/denali-design/how-to-theme-your-app-using-denali-dcefcb92e9fd"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
                <h5 className="is-grey-500 is-mono m-b-18">Mar 18, 2021</h5>
                <h3 className="is-grey-100 m-b-10">Create Custom Themes</h3>
                <p className="is-grey-100 m-b-30 m-r-30">Front-end frameworks are a valuable engineering asset that reduces time spent on front-end development and that is…</p>
                <p className="is-brand-200">Keep reading</p>
              </div>
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-off-1-12 lg-col-7-12 xl-col-off-1-12 xl-col-7-12 h-50 br-sm bg-size-cover bg-position-center" style={{ height: "inherit", backgroundImage: 'url("/images/develop/custom-themes.png")' }}></div>
            </a>
            <a
              className="flex p-30 m-y-15 br-lg row align-items-center develop-page--guide-card"
              href="https://medium.com/denali-design/getting-started-with-components-icons-in-denali-b694945a7dc9"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
                <h5 className="is-grey-500 is-mono m-b-18">Mar 19, 2021</h5>
                <h3 className="is-grey-100 m-b-10">Working with components</h3>
                <p className="is-grey-100 m-b-30 m-r-30">We built our components to be themeable by nature which means you aren’t tied to our components.</p>
                <p className="is-brand-200">Keep reading</p>
              </div>
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-off-1-12 lg-col-7-12 xl-col-off-1-12 xl-col-7-12 h-50 br-sm bg-size-cover bg-position-center" style={{ backgroundImage: 'url("/images/develop/working-with-components.png")' }}></div>
            </a>
            <hr className="m-t-60 m-b-40 has-bg-grey-700"></hr>
            <div className="row">
              <div className="xs-col-1-1">
                <h3 className="is-grey-100">Check out all of our <a href="/guides">guides</a></h3>
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
                <a 
                  className="flex flex-column p-40 shadow-3 br-lg m-5"
                  href="https://join.slack.com/t/denali-design/shared_invite/enQtNzk0MTE2NjU3MzE0LTM5NWFmMGFmZmFhZjVhMzdjMzYzMDQ4ZGNhZjYxNGUwMzgxMWRmODc4MWIzYTE3YzQ5OWMyM2IzMTkxZGExYWY"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="h-12 w-12 has-bg-brand-300 br-circle flex justify-content-center align-items-center">
                    <span className="d-icon d-slack is-medium is-grey-100"></span>
                  </div>
                  <h5 className="is-grey-700 is-mono m-t-20">Join the community</h5>
                  <h3 className="is-brand-300 m-t-14">Slack</h3>
                  <p className="m-t-10">Community Slack</p>
                </a>
              </div>
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-3 lg-col-1-3 xl-col-1-3">
                <a 
                  className="flex flex-column p-40 shadow-3 br-lg m-5"
                  href="https://medium.com/denali-design"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="h-12 w-12 has-bg-brand-300 br-circle flex justify-content-center align-items-center">
                    <span className="d-icon d-medium is-medium is-grey-100"></span>
                  </div>
                  <h5 className="is-grey-700 is-mono m-t-20">Learn more</h5>
                  <h3 className="is-brand-300 m-t-14">Blog</h3>
                  <p className="m-t-10">Visit our Medium</p>
                </a>
              </div>
              <div className="xs-col-1-1 sm-col-1-1 md-col-1-3 lg-col-1-3 xl-col-1-3">
                <a 
                  className="flex flex-column p-40 shadow-3 br-lg m-5"
                  href="mailto:denali@verizonmedia.com"
                >
                  <div className="h-12 w-12 has-bg-brand-300 br-circle flex justify-content-center align-items-center">
                    <span className="d-icon d-mail-new is-medium is-grey-100"></span>
                  </div>
                  <h5 className="is-grey-700 is-mono m-t-20">Contact the team</h5>
                  <h3 className="is-brand-300 m-t-14">Email</h3>
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