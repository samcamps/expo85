import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Artwork from '../components/artwork'
import {
  featured,
  artTiles,
  homeHero
} from './pages.module.css'

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

        <GatsbyImage className={homeHero} image={image} alt={homePage.picture.altText} />
      </section>

      <section >

        <h2 className={featured}>Featured works</h2>
        <hr></hr>

        <div className={artTiles}>{homePage.artwork.map(artwork => {

          return <Artwork key={artwork.id} slug={`artworks/${artwork.slug}`} artwork={artwork} />
        })}
        </div>
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
            gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true}, layout: FULL_WIDTH)
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