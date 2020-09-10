module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `CourseMaker | Make Online Courses`,
    siteUrl: `https://coursemaker.org`,
    baseUrl: `https://coursemaker.org`,
    description: `Easy, elegant, affordable. We take care of all the hassle so you can focus on 
     running your online course business`,
    image: `src/images/chris_portrait.jpg`,
    author: `Chris Samiullah`,
    organization: {
      name: 'CourseMaker',
      url: 'https://coursemaker.org',
      logo: 'https://lengstorf.com/android-chrome-512x512.png',
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ansonlowzf`,
      },
      {
        name: `github`,
        url: `https://github.com/coursemaker`,
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
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog/`,
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
        head: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 100,
        siteSpeedSampleRate: 10
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/updated_favicon.png`
      }
    },
		`gatsby-plugin-stylus`,
		{
			resolve: `gatsby-plugin-stylus`,
		},
    {
      resolve: '@mkitio/gatsby-theme-password-protect',
      options: {
        password: process.env.GATSBY_SITE_PW // delete or `undefined` to disable password protection
      }
    },
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://feed.podbean.com/coursemaker/feed.xml`,
        name: `Podcast`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            item: ['itunes:duration', 'itunes:episode', 'itunes:image', 'itunes:summary']
          }
        }
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `podcast-markdown-pages`,
        path: `${__dirname}/content/podcast`,
      },
    },
    `@pauliescanlon/gatsby-mdx-embed`
  ]
};
