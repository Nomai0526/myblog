import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout/layout"
// import Image from "../components/image/image"
// import SEO from "../components/seo/seo"
import SideBar from "../components/sidebar/index"
import Main from "../components/main/main"
// import ArticleItem from '../components/main/articleitem/index'
import styles from "./index.module.scss"

const IndexPage = () => {
  return (
    <div className={styles.totaldiv}>
      <SideBar></SideBar>
      <Main></Main>
    </div >
  )
}

export default IndexPage
