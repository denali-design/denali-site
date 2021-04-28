import Layout from '../layouts/DefaultLayout'
import ResourceCard from '../components/ResourceCard';
import data from "@denali-design/icons/dist/denali-icons.json";

export default function Design() {
  return (
    <Layout title="Icons" description="A catalog of all our 1000+ icon library.">
      <hr className="m-y-70" />

      <div className="flex flex-wrap">
      {
        Object.keys(data).map((key, index) => (
          <div 
            className="flex flex-column justify-content-center align-items-center has-bg-grey-100 flex-1 p-10 m-10 br-md" 
            style={{minWidth: "140px"}}
            key={index}
          >
          <span className={`d-icon d-${key}`} style={{fontSize: '42px'}}></span>
          <div className="flex justify-content-center align-items-center m-t-12" style={{textAlign: 'center', fontSize: '1.2rem', minHeight: '55px'}}>{key}</div>
        </div>
        ))
      } 
      </div>
      

    </Layout>
  )
}