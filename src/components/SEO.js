import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const SEO = () => {
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title="Simply Recipes"></Helmet>
  )
}

export default SEO
