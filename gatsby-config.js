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
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://coursemaker.org`,
        stripQueryString: true,
      },
    },
    `gatsby-plugin-sitemap`,
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
        bucketName: `coursemaker.org`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-170173292-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/updated_favicon.png`
      }
    }
  ]
};
