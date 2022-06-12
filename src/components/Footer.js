import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>Copyright &copy; {new Date().getFullYear()}</p>
      <p>
        Created by <a href="https://github.com/nelson2411">Nelson Rosales</a>
      </p>
      <p>
        <span>SimplyRecipes</span>. Built with{" "}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
