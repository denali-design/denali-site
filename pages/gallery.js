import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import ProjectCard from '../components/project-card';
import data from "../data/gallery";

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
              <h1>Gallery</h1>
            </div>
          </div>
          <div className="row m-t-20 m-b-40">
            <div className="xs-col-1-1 sm-col-1-1 md-col-3-4 lg-col-3-4 xl-col-3-4">
              <p className="is-large">A showcase of how people are using Denali to build and design first-in-class products and websites</p>
            </div>
          </div>

          {/* Submission */}
          <div className="has-bg-brand-300 br-lg flex space-between p-20 align-items-center" style={{ marginBottom: '140px'}}>
            <h4 className="is-grey-100 m-l-10">Did you build something using Denali? Let us know!</h4>
            <a className="button is-outline is-inverse is-medium">Submit your project</a>
          </div>

          {/* Projects */}
          {
              data.projects.map((project, index) => {
                return (
                  <ProjectCard
                    title={project.title}
                    author={project.author}
                    date={project.date}
                    image={project.image}
                    link={project.link}
                    color={project.color}
                    key={index}
                  />
                );
              })
            }

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