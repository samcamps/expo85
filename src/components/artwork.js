import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import{
    wrapper,
    foto
} from './artwork.module.css'

const Artwork = ({ artwork, slug }) => {

    const image = getImage(artwork.artworkMeta.picture.localFile)

    return (
        <Link className={wrapper} to={slug}>


            <article>
                <p>{artwork.artworkMeta.title} ({artwork.artworkMeta.artist})</p>
                <GatsbyImage className={foto}
                    image={image}
                    alt={artwork.artworkMeta.picture.altText}
                />
            </article>
        </Link>
    )
}

export default Artwork;