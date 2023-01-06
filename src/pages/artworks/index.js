import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Artwork from '../../components/artwork'
import {
  title,
  featured,
  artTiles,
  artTilesOverview,
  overviewHero
} from '../pages.module.css'

const ArtworksPage = ({
  data: {
    allWpArtwork: {
      edges
    },
    wpPage: {
      artworksPage
    }
  }
}
) => {

  const image = getImage(artworksPage.picture.localFile)
  console.log(edges)

  return (

    <Layout>

      <section>
        <h1 className={title}>{artworksPage.title}</h1>
        <hr></hr>
        <div
          dangerouslySetInnerHTML={{
            __html: artworksPage.description,
          }}
        />
        <GatsbyImage
          className={overviewHero}
          image={image}
          alt={artworksPage.picture.altText}
        />
        <hr></hr>
        <div className={artTilesOverview}>

          {edges.map((el) => (
            <Artwork key={el.node.id} slug={el.node.slug} artwork={el.node} />
          ))}
        </div>

      </section>
    </Layout >
  )
}

export default ArtworksPage;


export const query = graphql`
query  {
  wpPage(slug: {eq: "artworks"}) {
    artworksPage {
      title
      description
      picture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR,layout: FULL_WIDTH)
          }
        }
      }
    }
  }
  allWpArtwork {
    edges {
      node {
        id
        slug
        artworkMeta {
          title
          artist
          picture {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
      }
    }
  }
}
`