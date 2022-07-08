import React from "react"
import TagsList from "./TagsList"
import Recipes from "./Recipes"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        content {
          tags
        }
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipe = data.allContentfulRecipe.nodes
  console.log(recipe)
  return (
    <div>
      <h4>All Recipes</h4>
      <TagsList />
      <Recipes />
    </div>
  )
}

export default AllRecipes
