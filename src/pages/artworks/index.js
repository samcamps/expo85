import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Artwork from '../../components/artwork'

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
        <h2>{artworksPage.title}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: artworksPage.description,
          }}
        />
        <GatsbyImage
          image={image}
          alt={artworksPage.picture.altText}
        />
        <div>

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
            gatsbyImageData(placeholder: DOMINANT_COLOR)
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