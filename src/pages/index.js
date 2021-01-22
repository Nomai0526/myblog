import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout/layout"
// import Image from "../components/image/image"
// import SEO from "../components/seo/seo"
import SideBar from "../components/sidebar/index"
import Main from "../components/main/main"
import styles from "./index.module.scss"

const IndexPage = () => {
  console.log(styles);
  
  return (
    <div className={styles.totaldiv}>
      {/* <SEO title="Home" /> */}
      <SideBar ></SideBar >
      <Main></Main>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      </div>
    </div >
  )
}

export default IndexPage
