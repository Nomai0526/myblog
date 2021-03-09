const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPages } = actions;
  // const result = await graphql(
  //     `
  //       {
  //         site {
  //           siteMetadata {
  //             dateFormat
  //           }
  //         }
  //         postsRemark: allMarkdownRemark(
  //           sort: { fields: [fields___date], order: DESC }
  //           limit: 1000
  //         ) {
  //           edges {
  //             node {
  //               fields {
  //                 slug
  //               }
  //               frontmatter {
  //                 title
  //               }
  //             }
  //           }
  //         }
  //         tagsGroup: allMarkdownRemark(
  //           limit: 1000
  //         ) {
  //           group(field: frontmatter___tags) {
  //             fieldValue
  //           }
  //         }
  //       }
  //     `
  //   )
  // console.log(result);
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