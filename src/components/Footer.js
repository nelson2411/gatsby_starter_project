import React from "react"

const Footer = () => {
  return (
    <footer>
      <h4>Hello from footer</h4>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
      <p>
        Made by <a href="https://github.com/nelson2411">Nelson Rosales</a>
      </p>
    </footer>
  )
}

export default Footer
