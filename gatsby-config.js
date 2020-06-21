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
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
        author: `CourseMaker`,
        description: `Helping you make awesome online courses`
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        // TODO sort out dev
        bucketName: 's3-coursemaker.org'
      }
    },
    `gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/content/assets`,
			},
		},
		{
    resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-relative-images`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
							linkImagesToOriginal: false,
							sizeByPixelDensity: true,
							showCaptions: true
						}
					},
				]
			}
		},
  ]
};
