import Layout from '../layouts/DefaultLayout'
import ProjectCard from '../components/project-card';
import data from "../data/gallery";

export default function Develop() {
  return (
    <Layout title="Gallery" description="A showcase of how people are using Denali to build and design first-in-class products and websites.">

      {/* Submission */}
      <div className="has-bg-brand-300 br-lg flex space-between p-20 align-items-center m-t-40 justify-content-center" style={{ marginBottom: '140px' }}>
        <h4 className="is-grey-100 m-l-10">Did you build something using Denali? Let us know by sending us an <a></a>email!</h4>
      </div>
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