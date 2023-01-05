import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Artwork from '../components/artwork'

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
      <section>

        <h1>{homePage.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: homePage.description }} />

        <GatsbyImage image={image} alt={homePage.picture.altText} />
      </section>

      <section>
        <h2>Featured works</h2>
        {homePage.artwork.map(artwork => {

          return <Artwork key={artwork.id} slug={`artworks/${artwork.slug}`} artwork={artwork} />
        })}
      </section>

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
            gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
          }
        }
        altText
      }
      artwork {
        ... on WpArtwork {
          id
          slug
          artworkMeta {
            artist
            title
            picture {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
}
`