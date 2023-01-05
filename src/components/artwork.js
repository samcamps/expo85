import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import{
    wrapper
} from './artwork.module.css'

const Artwork = ({ artwork, slug }) => {

    const image = getImage(artwork.artworkMeta.picture.localFile)

    return (
        <Link className={wrapper} to={slug}>


            <article>
                <p>{artwork.artworkMeta.title}</p>
                <p>{artwork.artworkMeta.artist}</p>
                <GatsbyImage
                    image={image}
                    alt={artwork.artworkMeta.picture.altText}
                />
            </article>
        </Link>
    )
}

export default Artwork;