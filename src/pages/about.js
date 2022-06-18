import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const about = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby next level schlitz man braid prism</h2>
            <p>
              Praxis yes plz fingerstache brooklyn organic street art +1
              pinterest four dollar toast palo santo vape. Tumeric mumblecore
              tilde unicorn. Brooklyn seitan organic taiyaki umami, hot chicken
              mlkshk forage VHS fashion axe ennui kombucha lumbersexual
              glossier.
            </p>
            <p>
              Readymade prism pop-up man bun, pitchfork cold-pressed pickled
              iPhone truffaut tbh poutine 8-bit palo santo. Fanny pack brooklyn
              mumblecore, kogi kinfolk la croix DIY bitters single-origin coffee
              next level drinking vinegar.{" "}
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person puring salt in body of water"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default about
