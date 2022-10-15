import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import Recipes from "../components/Recipes"

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              I'm baby organic art party pabst edison bulb stumptown wolf
              scenester. Fashion axe four loko direct trade, next level vinyl
              palo santo biodiesel subway tile tilde ethical meditation flannel
              distillery bitters.
            </p>
            <p>Cloud bread tumblr literally scenester gentrify. </p>
            <p>
              Cred gastropub chartreuse marfa palo santo scenester beard
              chambray, aesthetic cloud bread XOXO kickstarter selfies lyft.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mzbwvlpg"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" id="email" name="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Your message</label>
                <textarea id="message" name="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="contact-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <Recipes recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { feature: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact
