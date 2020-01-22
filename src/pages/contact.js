import React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import "./contact.scss"

export default () => (
  <div class="contacts">
    <Layout>
      <Header headerText="Contact" />
      <a href="https://jonathan.dorety.dev">My Portfolio Page</a>
      <a href="https://github.com/kyullog">My GitHub Profile</a>
      <a href="https://www.linkedin.com/in/doretydev/">My LinkedIn</a>
    </Layout>
  </div>
)
