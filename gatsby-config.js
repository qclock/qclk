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
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Jura`,
            variable: true,
            variants: [`300`,`500`],
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
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
