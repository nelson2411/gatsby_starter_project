import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import slugify from "slugify"
import setupTags from "../utils/setupTags"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} Recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
