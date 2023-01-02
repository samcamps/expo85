import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const IndexPage = ({
  data: {
    wpPage: {
      homePage
    }
  }
}) => {

  const image = getImage(homePage.picture.localFile)

  return (
    <Layout>

      <h1>{homePage.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: homePage.description }} />

      <GatsbyImage image={image} alt={homePage.picture.altText} />

    </Layout>
  )
}


export default IndexPage

export const query = graphql`

query  {
  wpPage(slug: {eq: "home-page"}) {
    homePage {
      title
      description
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED,transformOptions: {grayscale: true})
          }
        }
        altText
      }
    }
  }
}
`