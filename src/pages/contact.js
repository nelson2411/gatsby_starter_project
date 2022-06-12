import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
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
            <form className="form contact-form">
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
              <buton type="submit" className="btn block">
                Submit
              </buton>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
