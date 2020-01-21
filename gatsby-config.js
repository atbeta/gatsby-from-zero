module.exports = {
  siteMetadata: {
    title: `Way to Go`,
    description: `以前端为起点，探索计算机网络生态。本站用于记录学习心得，欢迎交流。`,
    author: `@atbeta`,
    copyrights: '',
    logo: {
      url: '',
      alt: ''
    },
    logoText: 'Way to Go',
    postPerPage: 6,
    menuList: [
      {
        title: '主页',
        path: '/'
      },
      {
        title: '归档',
        path: '/archives'
      },
      {
        title: '关于',
        path: '/about'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 690,
          },
        }
      ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://db.pup.pub:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`post`, `tag`, `user`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
