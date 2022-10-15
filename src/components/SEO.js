import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
        author
        keywords
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[
        { name: "description", content: metaDescription },
        { name: "author", content: site.siteMetadata.author },
        { name: "keywords", content: site.siteMetadata.keywords },
      ]}
    ></Helmet>
  )
}

export default SEO
