import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'

const ArtworksPage = ({
  data: {
    allWpArtwork: {
      edges

    }
  }
}) => {

  return (

    <Layout >
      {edges.map((item) => {

        const artwork = item.node.artworkMeta;
        const slug = item.node.slug;
        
        return <Link to={`/artworks/${slug}`}>
          <p key={item.node.id}>{artwork.title} ({artwork.artist})</p>
        </Link>

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
        id
      }
    }
  }
}
`