import React from "react"
import Layout from "../components/layout/layout"
import Header from "../components/header/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Layout>
      <Header headerText="Jonathan Dorety" />
      <p>I'm a software engineer who likes to play with hardware on the side!</p>
    </Layout>
  </div>
)
