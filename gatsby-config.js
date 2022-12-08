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
              name: `Générateur de mot de passe`,
              short_name: `GP`,
              start_url: `/`,
              background_color: `#166534`,
              theme_color: `#166534`,
              display: `minimal-ui`,
              icon: `static/favicon.ico`
          }
      }
  ]
}
