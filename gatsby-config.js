module.exports = {
  siteMetadata: {
    title: `诺麦的博客`,
    description: `meow description`,
    author: `@Nomai0526`,
    // image:'static/profile_icon.png'
    social: {
      douban: "#",
      email: "#",
      facebook: "#",
      github: "#",
      instagram: "#",
      linkedin: "#",
      rss: "/rss.xml",
      telegram: "#",
      twitter: "#",
      youtube: "#",
    },
    footerHTML: `© 2021 <a href="https://github.com/Nomai0526">Nomai0526</a> All rights reserved.`,
    dateFormat: `YYYY-MM-DD`,
    language: `zh`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        // background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/profile_icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
