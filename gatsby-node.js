const path = require(`path`)
const { slugify } = require('./src/utils/slugify') // This function is used to convert the podcast title to a slug

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    const result = await graphql(
      `
      {
          allFeedPodcast {
            nodes {
              itunes {
                duration
                episode
                image {
                  attrs {
                    href
                  }
                }
              }
              link
              title
              id
            }
          }
        }
      `
    )
  
    if (result.errors) {
      throw result.errors
    }
  
    // Create Podcast pages.
    const podcasts = result.data.allFeedPodcast.nodes
  
    podcasts.forEach((podcast, index) => {
      const slug = slugify(podcast.title) // Convert title to url-safe slug (RSS feed doesn't provide a slug)
      createPage({
        path: `/podcast/${slug}/`,
        component: path.resolve(`./src/components/podcast-page.js`),
        // values in the context object are passed in as variables to page queries
        context: {
          id: podcast.id, // "Using a Theme"
          episode: podcast.itunes.episode
        },
      })
    })
    
  }
  