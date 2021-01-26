import React from 'react'
import styles from './main.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import ArticleItem from './articleitem/index'

const Main = ({ children }) => {
    const {allMarkdownRemark} = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
             node {
               frontmatter {
                image
                description
                 noComments
                 slug
                tags
                 title
                }
              }
             }
          }
        }
    `)
    const edges = allMarkdownRemark.edges;
    return (<div style={{ textAlign: "center" }} id={styles["main"]} >
        {children}
        {edges&&edges.map(({node})=>{
            console.log(node.frontmatter);
            
            return <div key={node.frontmatter.title}>
                <ArticleItem title={node.frontmatter.title} 
                description={node.frontmatter.description}
                image={node.frontmatter.image} >
                </ArticleItem>
        </div>})}
    </div>)
}

export default Main