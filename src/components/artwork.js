import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Artwork = ({ artwork, slug }) => {

    const image = getImage(artwork.artworkMeta.picture.localFile)

    return (
        <Link to={slug}>

            <GatsbyImage
                image={image}
                alt={artwork.artworkMeta.picture.altText}
            />
            <article>
                <p>{artwork.artworkMeta.title}</p>
                <p>
                    {artwork.artworkMeta.artist}
                </p>
            </article>
        </Link>
    )
}

export default Artwork;