import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <h1>Home Page</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
          erat sodales, fringilla felis vel, vehicula odio. Suspendisse dictum
          placerat nisi eget dignissim. Aliquam quis leo sit amet massa pretium
          elementum. Aenean nec tortor vitae dui posuere eleifend eget at dui.
          Pellentesque quis suscipit lectus. Curabitur finibus, nibh quis
          sodales blandit, orci mauris tincidunt eros, vitae tincidunt enim
          turpis a neque. Aliquam lacinia pellentesque dignissim.
        </p>
      </div>
    </Layout>
  )
}
