module.exports = {
  siteMetadata: {
    title: `QCLK`,
    description: `QCLK CTRL`,
    keywords: ``,
    author: `@_nec`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-force-trailing-slashes',
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Jura`,
            variants: [`300`,`500`],
            subsets: [],
          }
        ],
      },
    },
    { // https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `QCLK`,
        short_name: `QCLK`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#EB00FF`,
        display: `standalone`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
