const _ = require("lodash")
const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`);
const { addListener } = require("process");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articlePage = path.resolve(`./src/pages/articlepage/articlepage.js`)

  const result = await graphql(
    `
        {
          site {
            siteMetadata {
              dateFormat
            }
          }
          postsRemark: allMarkdownRemark(
            sort: { fields: [fields___date], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `
  )
  const posts = result.data.postsRemark.edges;
  posts.forEach((post, index) => {
    const previous = index === 0 ? null : posts[index - 1].node;
    const next = index === posts.length - 1 ? null : posts[index + 1].node;
    
    createPage({
      path: post.node.fields.slug,
      component: articlePage,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      }
    })
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    let slug = node.frontmatter.slug || createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
    try {
      var date = node.frontmatter.date
      if (!date) {
        const filename = node.fileAbsolutePath
          .split(/.*[\/|\\]/)[1]
          .split(".")[0]
        date = new Date(filename.substring(0, 10))
        if (isNaN(date)) {
          throw "Invalid Date"
        }
      }
    } catch (error) {
      console.warn(
        "Failed to get date from frontmatter or filename, use default date instead.",
        {
          slug: slug,
          filepath: node.fileAbsolutePath,
          error: error,
        }
      )
      date = new Date("1999-11-26")
    } finally {
      createNodeField({
        node,
        name: "date",
        value: date,
      })
    }
  }
}