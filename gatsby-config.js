module.exports = {
  siteMetadata: {
    title: `Sanderfish | Bootstrapper, Developer and Product Designer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-49330656-1`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
