/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: "Générateur de mot de passe",
        description: "Générateur de mot de passe",
        author:"Dereje Getu Tadesse",
    },
  plugins: [
      'gatsby-plugin-postcss',
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: `gatsby-starter-default`,
              short_name: `starter`,
              start_url: `/`,
              background_color: `#166534`,
              theme_color: `#166534`,
              display: `minimal-ui`,
              icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.

          }
      }
  ]
}
