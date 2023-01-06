import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
    wrapper,
    foto
} from './artwork.module.css'

const Artwork = ({ artwork, slug }) => {

    const image = getImage(artwork.artworkMeta.picture.localFile)

    return (
        <Link className={wrapper} to={slug}>


            <article>

                <GatsbyImage
                    className={foto}
                    image={image}
                    alt={artwork.artworkMeta.picture.altText}
                />
                <p>{artwork.artworkMeta.title} ({artwork.artworkMeta.artist})</p>
            </article>
        </Link>
    )
}

export default Artwork;