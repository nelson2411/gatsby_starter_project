import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

const Recipes = () => {
  return (
    <Layout>
      <SEO
        title="Recipes"
        description="All Salvadorean recipes, traditional and deliciuos cusine"
      />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
