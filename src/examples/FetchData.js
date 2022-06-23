import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        title
        simpleData
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      {/* <h2>Name: {data.site.siteMetadata.person.name}</h2> */}
      <h3>Site is: {title}</h3>
    </div>
  )
}

export default FetchData
