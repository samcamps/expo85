
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../../components/layout'


const ArtworkPage = ({
    data: {
        wpArtwork: {
            artworkMeta: el
        }
    }
}) => {

    const image = getImage(el.picture.localFile)

    return (

        <Layout >
            <div>
                <h1>{el.title}</h1>
                <h3>{el.artist}</h3>
                <div dangerouslySetInnerHTML={{ __html: el.description }} />
                <p>Year: {el.year}</p>
                <p>Type: {el.type}</p>
                { el.signed && <p>Gesigneerd</p>}
                <GatsbyImage image={image} alt={el.picture.altText} />


            </div>
        </Layout>
    )
}



export default ArtworkPage


export const query = graphql`

 query ($id: String) {
    wpArtwork(id: {eq: $id}) {
      artworkMeta {
        artist
        description
        signed
        title
        type
        year
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
  `