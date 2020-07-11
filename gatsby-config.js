module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    'gatsby-theme-blog-darkmode'
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Amorph's Guestbook`,
    author: `Yash Dave`,
    description: `A guestbook for folks visiting the website! Built to demonstrate Gatsby Conditional Builds`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/amorpheuz`,
      },
      {
        name: `Github`,
        url: `https://github.com/amorpheuz`,
      },
    ],
  },
}
