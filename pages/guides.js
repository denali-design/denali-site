import Layout from '../layouts/DefaultLayout'
import GuidesCard from '../components/guides-card';
import data from "../data/splash";

export default function Design() {
  return (
    <Layout title="Guides" description="Choose a guide to get started with Denali.">
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
    </Layout>
  )
}