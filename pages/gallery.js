import Layout from '../layouts/DefaultLayout'
import ProjectCard from '../components/project-card';
import data from "../data/gallery";

export default function Develop() {
  return (
    <Layout title="Gallery" description="A showcase of how people are using Denali to build and design first-in-class products and websites.">
      {/* <Navbar logo="white" style={{ position: "sticky", top: "0px", zIndex: "100" }} /> */}


      {/* Submission */}
      <div className="has-bg-brand-300 br-lg flex space-between p-20 align-items-center m-t-40" style={{ marginBottom: '140px' }}>
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
              tags={project.tags}
              key={index}
            />
          );
        })
      }

    </Layout>
  )
}