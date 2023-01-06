import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../../components/layout'
import {
    title,
    description,
    properties,
    artHero,
    pictureContainer,
    artistName
} from '../pages.module.css'


const ArtworkPage = ({
    data: {
        wpArtwork: {
            artworkMeta: el,
            provenances: {
                nodes
            }
        }
    }
}) => {
    console.log(nodes)

    const image = getImage(el.picture.localFile)

    return (

        <Layout >
            <div className={description}>
                <h2 className={title}>{el.title},  {el.year} </h2>
                <hr></hr>
                <h3 className={artistName}>{el.artist}</h3>
                <div dangerouslySetInnerHTML={{ __html: el.description }} />
                <hr></hr>

                <div className={pictureContainer}>
                    <GatsbyImage className={artHero} image={image} alt={el.picture.altText} />
                  
                </div>
                <div className={properties}>
                    <p>Afmetingen: {el.dimensions}</p>
                    <p>Type: {el.type}</p>
                    {el.signed && <p>Gesigneerd</p>}

                    <div>
                        <p>Provenance:
                            {nodes.map((el, index) => (
                                <span key={index}>
                                    {" "} {el.name} {index + 1 < nodes.length && "- "}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
                <hr></hr>

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
      dimensions
      picture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
    provenances {
      nodes {
        name
      }
    }
  }
}
`
