import React, { useState } from 'react';
import Layout from '../../layouts/ComponentsLayout'
import DetailCard from '../../components/DetailCard';
import data from "../../data/navigation";

export const meta = {
  title: 'Components'
}

export default function Components() {

  const [framework, setFramework] = useState(null);

  return (
    <Layout meta={meta} sidebar="components">
      <h1>Components</h1>
      <p className="is-large">Denali components are the foundation of building intuitive, themable user interfaces. Browser all our components or select your framework of choice.</p>
      <div className="tags m-t-30">
        <span
          className={framework === null ? "tag outlined is-active" : "tag outlined"}
          onClick={() => setFramework(null)}
        >All Components</span>
        <span
          className={framework === 'css' ? "tag outlined is-active" : "tag outlined"}
          onClick={() => setFramework('css')}
        >CSS</span>
        <span
          className={framework === 'ember' ? "tag outlined is-active" : "tag outlined"}
          onClick={() => setFramework('ember')}
        >Ember</span>
        <span
          className="tag outlined is-disabled"
        >React</span>
      </div>

      <hr className="m-y-50" />

      {
        data.components.map((section, index) => {
          return (
            <div className="row row-override" key={index}>
              {
                section.pages.map((page, index) => {
                  if (framework !== null) {
                    if (page.frameworks.includes(framework)) {
                      return (
                        <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3" key={index}>
                          <DetailCard
                            title={page.name}
                            description={page.description}
                            link={page.path}
                            image={page.image}
                            disabled={page.disabled}
                          />
                        </div>
                      );
                    }
                  } else {
                    return (
                      <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3" key={index}>
                        <DetailCard
                          title={page.name}
                          description={page.description}
                          link={page.path}
                          image={page.image}
                          disabled={page.disabled}
                        />
                      </div>
                    );
                  }
                })
              }
            </div>
          );
        })
      }

    </Layout>
  )
}