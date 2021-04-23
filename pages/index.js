import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import GuidesCard from '../components/guides-card';
import NewsCard from '../components/news-card';
import data from "../data/splash";

const Index = () => {

  useEffect(() => {
    window.addEventListener('scroll', changeThemeOnScroll)
    return () => {
      window.removeEventListener('scroll', changeThemeOnScroll)
      console.log('******************* UNMOUNTED');
    };
  }, []);

  const changeThemeOnScroll = () => {
    var windowHeight = window.innerHeight;
    var windowScroll = window.scrollY;

    var code = document.getElementById("themeImageCode");
    var imageTop = document.getElementById("image");
    var imageOne = imageTop.offsetTop + windowHeight - 800;
    var imageTwo = imageTop.offsetTop + windowHeight + 200;

    if (windowScroll > imageOne && windowScroll < imageTwo) {
      imageTop.classList.remove("denali");
      imageTop.classList.add("dark");
      imageTop.classList.remove("purple");
      code.innerHTML = "dark-theme";
    } else if (windowScroll > imageTwo) {
      imageTop.classList.remove("denali");
      imageTop.classList.remove("dark");
      imageTop.classList.add("purple");
      code.innerHTML = "purple-theme";
    } else {
      imageTop.classList.add("denali");
      imageTop.classList.remove("dark");
      imageTop.classList.remove("purple");
      code.innerHTML = "denali-theme";
    }
  }

  return (
    <div className="splash-page denali-new-age">
      <Head>
        <title>Denali</title>
      </Head>

      {/* Theme Images */}
      <img src="/images/splash/components-dark.jpg" alt="" style={{ visibility: 'hidden', position: 'absolute', pointerEvents: 'none' }} />
      <img src="/images/splash/components-denali.jpg" alt="" style={{ visibility: 'hidden', position: 'absolute', pointerEvents: 'none' }} />
      <img src="/images/splash/components-purple.jpg" alt="" style={{ visibility: 'hidden', position: 'absolute', pointerEvents: 'none' }} />

      <Navbar logo='white-solid' style={{ position: "sticky", top: "0px", zIndex: "100", borderBottom: "1px solid rgba(255,255,255, 0.2)", background: "#006DFB" }} />

      {/* Cover */}
      <div className="container-full cover">
        <div className="container">
          <div className="row">
            <div className="xs-col-12-12 sm-col-10-12 sm-col-off-1-12 md-col-8-12 md-col-off-2-12 lg-col-6-12 lg-col-off-3-12 xl-col-6-12 xl-col-off-3-12 p-x-20">
              <h1 className="is-grey-100">Build and theme products like never before</h1>
              <p className="is-large is-grey-100 m-t-40">Denali's themeable design system provides the ease of building with a framework without sacrificing your unique visual style.</p>
              <div className="flex flex-wrap justify-content-center p-t-40 p-b-100">
                <Link href="/develop">
                  <a className="button is-solid is-large is-inverse m-10">Start Building</a>
                </Link>
                <Link href="/design">
                  <a className="button is-outline is-large is-inverse m-10">View Principles</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row p-b-80 cover-image">
            <div className="p-b-80">
              <img src="/images/splash/cover-image.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Develop */}
      <div className="container-full re-theme">
        <div className="container">
          <div className="row">
            <div className="xs-col-12-12 sm-col-10-12 sm-col-off-1-12 md-col-8-12 md-col-off-2-12 lg-col-6-12 lg-col-off-3-12
              xl-col-6-12 xl-col-off-3-12">
              <p className="is-grey-600 m-b-24 is-large"><i className="d-icon d-computer-code m-r-12"></i><span className="is-mono">Develop</span></p>
              <h1 className="is-grey-800 p-x-40">Ready to go components re-themed in a snap.</h1>
              <p className="is-grey-800 m-t-40 is-large">We built our components to be themeable by nature which means you aren’t tied to our components visual design.</p>
              <div className="flex justify-content-center">
                <Link href="/develop">
                  <a className="button is-large is-solid m-t-40">Start Building <i className="d-icon d-arrow-right m-l-18"></i></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Images */}
      <div className="theme-image">
        <div className="theme-code-container">
          <div className="theme-code is-mono">&#60;body className="<div id="themeImageCode" className=""></div>"&#62;</div>
        </div>
        <div id="image" className="denali"></div>
      </div>

      {/* Icons */}
      <div className="container-full icons-container">
        <div className="container icons">
          <div className="row">
            <div className="xs-col-12-12 sm-col-10-12 sm-col-off-1-12 col-7-12 content">
              <div className="row">
                <div className="xs-col-10-12 xs-col-off-1-12 sm-col-10-12 sm-col-off-1-12 col-4-7 col-off-1-7 p-y-100">
                  <p className="is-grey-600 m-b-24 is-large"><i className="d-icon d-partners m-r-12"></i><span className="is-mono">Design + Develop</span></p>
                  <h1 className="is-grey-100">1,000+ solid and outline icons. Available as png, svg, or font.</h1>
                  <p className="is-grey-100 m-t-40 is-large">Adding icons to your products is as easy as adding a CSS class - because that’s what they are!</p>
                  <div className="flex justify-content-start">
                    <a href="https://denali-design.github.io/denali-icon-font/docs/" className="button is-solid is-large m-t-40">View Icon Library</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="xs-col-8-12 xs-col-off-2-12 sm-col-8-12 sm-col-off-2-12 md-col-6-12 md-col-off-6-12 col-6-12 col-off-6-12 image"></div>
          </div>
          <div className="row align-items-center">
            <div className="xs-col-10-12 xs-col-off-1-12 sm-col-10-12 sm-col-off-1-12 col-6-12">
              <img className="xs-hide sm-hide" src="/images/splash/principles-lg.png" alt="" />
              <img className="md-hide lg-hide xl-hide m-b-40" src="/images/splash/principles-sm.png" alt="" />
            </div>
            <div className="xs-col-12-12 sm-col-10-12 sm-col-off-1-12 col-6-12">
              <div className="row">
                <div className="xs-col-10-12 xs-col-off-1-12 sm-col-10-12 sm-col-off-1-12 col-4-6 col-off-1-6">
                  <p className="is-grey-600 m-b-24 is-large"><i className="d-icon d-partners m-r-12"></i><span className="is-mono">Design</span></p>
                  <h1 className="is-grey-800">Design fundamentals + UX best practices</h1>
                  <p className="is-grey-800 m-t-40 is-large">Whether it’s a question about typography or responsive behavior, our principles have the answers you’re looking for.</p>
                  <div className="flex justify-content-start">
                    <Link href="/design">
                      <a className="button is-solid is-large m-t-40">View Principles</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guides */}
        <div className="container" style={{ marginBottom: '230px' }}>
          <div className="row" style={{ marginTop: '300px', marginBottom: '80px' }}>
            <div className="xs-col-10-12 xs-col-off-1-12 sm-col-8-12 md-col-6-12 lg-col-5-12 xl-col-5-12">
              <p className="is-grey-600 m-b-24 is-large"><i className="d-icon d-partners m-r-12"></i><span className="is-mono">Design + Develop</span></p>
              <h1 className="is-grey-800">Everything you need to jump right in</h1>
              <p className="is-grey-800 m-t-40 is-large">Whether you're a designer or developer get started with Denali in minutes using our handy guides and resources.</p>
            </div>
          </div>

          <div className="row flex-wrap">
            {
              data.guides.map((guide, index) => {
                return (
                  <GuidesCard
                    title={guide.title}
                    type={guide.type}
                    icon={guide.icon}
                    image={guide.image}
                    link={guide.link}
                    external={guide.external}
                    key={index}
                  />
                );
              })
            }
          </div>

        </div>
      </div>

      {/* Updates */}
      <div className="container-full">
        <div className="container">
          <div className="row" style={{ marginTop: '0px', marginBottom: '0px' }}>

            <div className="xs-col-10-12 xs-col-off-1-12 sm-col-8-12 md-col-6-12 lg-col-5-12 xl-col-5-12">
              <p className="is-grey-600 m-b-24 is-large"><i className="d-icon d-star m-r-12"></i><span className="is-mono">Updates</span>
              </p>
              <h1 className="is-grey-800">What’s new</h1>
              <p className="is-grey-800 m-t-40 is-large">We’re always pushing new improvements. Check out the latest below and view
            previous updates on our <a>whats new page.</a>
              </p>
            </div>
          </div>

          <div className="row updates-container" style={{ marginTop: '80px', marginBottom: '200px' }}>
            {
              data.news.map((item, index) => {
                return (
                  <NewsCard
                    title={item.title}
                    date={item.date}
                    description={item.description}
                    action={item.action}
                    link={item.link}
                    key={index}
                  />
                );
              })
            }
          </div>
        </div>
      </div>

      {/* Quotes */}
      <div className="container-full quotes-container">
        <div className="container">
          <div className="row quotes-title-section">
            <div className="xs-col-12-12 sm-col-10-12 sm-col-off-1-12 md-col-8-12 md-col-off-2-12 lg-col-6-12 lg-col-off-3-12 xl-col-6-12 xl-col-off-3-12">
              <p className="is-grey-600 m-b-24 is-large"><i className="d-icon d-megaphone m-r-12"></i><span className="is-mono">Success stories</span></p>
              <h1 className="is-grey-800">Hear from our partners</h1>
              <p className="is-grey-800 m-t-40 is-large">From developer productivity tools to open source projects, Denali gives you the resources to bring your products to life.</p>
            </div>
          </div>

          <div className="row">
            <div className="xs-col-12-12 sm-col-10-12 sm-col-off-1-12 md-col-9-12 md-col-off-3-12 lg-col-7-12 lg-col-off-4-12 xl-col-7-12 xl-col-off-4-12 quote-text">

              {/* Navi */}
              <div className="row quote-one">
                <div className="xs-col-10-12 xs-col-off-1-12 sm-col-10-12 sm-col-off-1-12 md-col-5-9 md-col-off-3-9 lg-col-6-9 lg-col-off-2-9 xl-col-6-9 xl-col-off-2-9">
                  <p className="is-grey-500 is-large"><i className="d-icon d-computer-code m-r-12"></i><span className="is-mono">Increasing productivity</span></p>
                  <p className="is-grey-100 m-t-50 quote-content-text">“For teams without a designer, creating professional looking UIs is a challenge. Denali empowers developers to build great experiences quickly and confidently”</p>
                  <div className="quote-contact">
                    <img src="/images/splash/quote/jon-kilroy.jpg" alt="" />
                    <div>
                      <p className="name is-mono">Jon Kilroy</p>
                      <p className="contact-title is-mono">Sr Principle Architect</p>
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div className="active-bar"></div>
                  </div>
                </div>
              </div>

              {/* Screwdriver */}
              <div className="row quote-two">
                <div
                  className="xs-col-10-12 xs-col-off-1-12 sm-col-10-12 sm-col-off-1-12 md-col-5-9 md-col-off-3-9 lg-col-6-9 lg-col-off-2-9 xl-col-6-9 xl-col-off-2-9">
                  <p className="is-grey-500 is-large"><i className="d-icon d-computer-code m-r-12"></i><span className="is-mono">Increasing productivity</span></p>
                  <p className="is-grey-100 m-t-50 quote-content-text">“Denali is an ambitious design system to build ambitious web application! It has a slick look and feel, and can pick & choose CSS and icons selectively.”</p>
                  <div className="quote-contact">
                    <img src="/images/splash/quote/alan-dong.jpg" alt="" />
                    <div>
                      <p className="name is-mono">Alan Dong</p>
                      <p className="contact-title is-mono">Front-end Engineer</p>
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div className="active-bar"></div>
                  </div>
                </div>
              </div>

              {/* Athenz */}
              <div className="row quote-three">
                <div
                  className="xs-col-10-12 xs-col-off-1-12 sm-col-10-12 sm-col-off-1-12 md-col-5-9 md-col-off-3-9 lg-col-6-9 lg-col-off-2-9 xl-col-6-9 xl-col-off-2-9">
                  <p className="is-grey-500 is-large"><i className="d-icon d-computer-code m-r-12"></i><span className="is-mono">Increasing productivity</span></p>
                  <p className="is-grey-100 m-t-50 quote-content-text">“Denali enabled rapid development of Athenz UI and made it possible to have a single implementation for both open source and on-prem deployments.”</p>
                  <div className="quote-contact">
                    <div>
                      <p className="name is-mono">Pratik Gote</p>
                      <p className="contact-title is-mono">Front-end developer</p>
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div className="active-bar"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="row">
            <div className="xs-hide sm-hide col-4-12 lg-col-off-1-12 xl-col-off-1-12 quote-button">
              <div className="quote-item quote-button-one">
                <div className="company-image"><i className="d-icon d-verizon-check"></i></div>
                <div className="context">
                  <p className="company">Verizon Media</p>
                  <p className="category">Enterprise tools</p>
                </div>
              </div>

              <div className="quote-item quote-button-two">
                <div className="company-image"><i className="d-icon d-screwdriver"></i></div>
                <div className="context">
                  <p className="company">Screwdriver.cd</p>
                  <p className="category">CI/CD Platform</p>
                </div>
              </div>

              <div className="quote-item quote-button-three">
                <div className="company-image"><i className="d-icon d-athenz"></i></div>
                <div className="context">
                  <p className="company">Athenz</p>
                  <p className="category">Security</p>
                </div>
              </div>
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
  )
}

export default Index;