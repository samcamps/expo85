import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Artwork from '../components/artwork'
import {
  title,
  featured,
  artTiles,
  homeHero,
  contact,
  form
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

        <h1 className={title}>{homePage.title}</h1>
        <hr></hr>

        <div dangerouslySetInnerHTML={{ __html: homePage.description }} />

        <GatsbyImage className={homeHero} image={image} alt={homePage.picture.altText} />
      </section>

      <section >

        <h2 className={featured}>Featured artworks</h2>
        <hr></hr>

        <div className={artTiles}>

          {homePage.artwork.map(artwork => {
            return <Artwork key={artwork.id} slug={`artworks/${artwork.slug}`} artwork={artwork} />

          })}
        </div>
      </section>
      <hr></hr>

      <section className={form}>
        <h2 className={contact}>Laat ons een boodschap</h2>
        <form name="contact" method="POST" data-netlify="true">
          <label>Voornaam</label>
          <input type="text" name="Voornaam" required={true} />

          <label>Achternaam</label>
          <input type="text" name="Achternaam" required={true} />

          <label>E-mail</label>
          <input type="email" name="E-mail" required={true} />

          <label>Onderwerp</label>
          <input type="text" name="Onderwerp" required={true} />

          <label>Boodschap</label>
          <textarea name="Boodschap" required={true}></textarea>

          <input type="hidden" name="form-name" value="contact" />
          <button type="submit">Verstuur</button>
        </form>
      </section>
      <hr></hr>

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