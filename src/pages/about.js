import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"

const about = () => {
  return (
    <Layout>
      <div className={page}>
        <h1>This is an about page</h1>
        <p className={text}>
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

export default about
