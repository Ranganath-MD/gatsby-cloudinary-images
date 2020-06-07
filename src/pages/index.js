import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"


const IndexPage = () => {
  const data = useStaticQuery(graphql`
        query CloudinaryImages {
            allCloudinaryMedia {
              edges {
                node {
                  secure_url
                }
              }
            }
          }
          `
  );

  const clImages = data.allCloudinaryMedia.edges;

  return (
    <Layout>
    <SEO title="Cloudinary Images" />
      <h2>Get the images from Cloudinary folder using graphql query</h2>
      <div className="container">
        {clImages.map((image, index) => (
          <div key={`${index}-cl`} className="item">
            <img src={image.node.secure_url} alt="cloudinary-images"/>
          </div>
        ))
      }
      </div>
    </Layout>
  )
}

export default IndexPage
