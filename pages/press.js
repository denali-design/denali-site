import Layout from '../layouts/DefaultLayout'
import data from "../data/press";

export default function Design() {
  return (
    <Layout title="Press" description="A collection of articles about or featuring Denali.">
      <hr className="m-y-70" />
      {
        data.press.map((item, index) => {
          return (
            <div className="row m-y-20" key={index}>
              <h4>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={item.link}
                >
                  {item.title}
                </a>
              </h4>
            </div>
          );
        })
      }
    </Layout>
  )
}