exports.createPages = async ({ graphql, actions }) => {
    const { createPages } = actions;
    const result = await graphql(
        `
          {
            site {
              siteMetadata {
                dateFormat
              }
            }
            postsRemark: allMarkdownRemark(
              filter: { frontmatter: { layout: { ne: "page" } } }
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
            pagesRemark: allMarkdownRemark(
              filter: { frontmatter: { layout: { eq: "page" } } }
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
            tagsGroup: allMarkdownRemark(
              filter: { frontmatter: { layout: { ne: "page" } } }
              limit: 1000
            ) {
              group(field: frontmatter___tags) {
                fieldValue
              }
            }
          }
        `
      )
      console.log();
}