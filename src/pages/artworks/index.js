import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'

const ArtworksPage = ({
  data: {
    allWpArtwork: {
      edges
      
    }
  }
}) => {
console.log(edges)
  return (
    <Layout >
      {edges.map((item) => {
        const artwork = item.node.artworkMeta;
        return <p key={item.node.id}>{artwork.title} ({artwork.artist})</p>
      })}
    </Layout>
  )
}


export default ArtworksPage;

export const query = graphql`
query {
  allWpArtwork {
    edges {
      node {
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
        id
      }
    }
  }
}
`