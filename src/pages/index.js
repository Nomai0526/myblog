import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout/layout"
import Image from "../components/image/image"
// import SEO from "../components/seo/seo"
import SideBar from "../components/sidebar/index"
import Main from "../components/main/main"

const IndexPage = () => (
  <div>
    {/* <SEO title="Home" /> */}
    <SideBar></SideBar>
    <Main>123123</Main>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </div>
)

export default IndexPage
