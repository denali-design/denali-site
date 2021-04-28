import Layout from '../layouts/DefaultLayout'
import ResourceCard from '../components/ResourceCard';
import data from "../data/faq";

export default function Design() {
  return (
    <Layout title="Frequently Asked Questions" description="You have questions and we have answers.">
      <hr className="m-y-70" />
      {
        data.questions.map((question, index) => {
          return (
            <>
              <div className="m-t-50" key={index}>
                <h3>{question.q}</h3>
                <p className="m-t-10">{question.a}</p>
              </div>

              <div className="row m-t-10">
                {
                  question.resources.map((resource) => {
                    return (
                      <ResourceCard
                        name={resource.name}
                        caption={resource.caption}
                        icon={resource.icon}
                        link={resource.link}
                      />
                    );
                  })
                }
              </div>
            </>
          );
        })
      }
    </Layout>
  )
}