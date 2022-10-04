import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "@sindresorhus/slugify"

const Recipes = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, image, prepTime, cookTime } = recipe
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              image={image.gatsbyImageData}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Prep: {prepTime}min | Cook : {cookTime}min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default Recipes
