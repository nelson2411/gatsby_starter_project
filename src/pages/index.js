import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hello People!</h1>
      <p>Welcome to your new Gatsby site.</p>
      <Link to="/about/">About</Link>
    </div>
  )
}
