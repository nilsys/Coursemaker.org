module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `CourseMaker`,
    author: `Chris Samiullah`,
    siteUrl: `https://coursemaker.org`,
    baseUrl: `https://coursemaker.org`,
    description: `CourseMaker description`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ansonlowzf`,
      },
      {
        name: `github`,
        url: `https://github.com/ansonlowzf`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `TODO`,
    //     head: true,
    //   },
    // },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
        author: `CourseMaker`,
        description: `Helping you make awesome online courses`
      }
    },
    `gatsby-plugin-react-helmet`,
  ]
};
