import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  container,
  nav,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (

    <div className={container}>

      <title>{data.site.siteMetadata.title}</title>

      <nav className={nav}>

        <header className={siteTitle}>{data.site.siteMetadata.title}</header>

        <ul className={navLinks}>

          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">Home</Link>
          </li>

          <li className={navLinkItem}>
            <Link className={navLinkText} to="/artworks/">Artworks</Link>
          </li>

        </ul>

      </nav>

      <main>{children}</main>

    </div>
  )
}



export default Layout
