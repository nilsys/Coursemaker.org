import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from "../components/seo";
const { slugify } = require('../utils/slugify')

// Template for the list of podcasts, sourced from the RSS feed, which can be found in gatsby-config
export default ({ pageContext, location, data }) => {
    const seo = {
          frontmatter: {
              // By default, get the slug from the page location.
              slug: location.pathname.replace(/[^\w\d-]/g, ''),
              ...pageContext.frontmatter,
          },
    };
    const podcasts = data.allFeedPodcast.nodes

	return (
		<Layout footerHr="true">
			<SEO {...seo} />
      <main className="py-16 text-gray-900 lg:py-24">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-full xl:w-9/12">
			      <div className="post-list space-y-4 md:space-y-6">
                {podcasts.map(podcast => {
                    const slug = slugify(podcast.title) // Convert title to url-safe slug (RSS feed doesn't provide a slug)
                    return (
                        <Link to={`/podcast/${slug}`} className="block px-10 py-8 bg-white rounded-lg shadow hover:shadow-lg transition transition-all duration-300">
                            <h2 className="text-xl lg:text-2xl">{podcast.title}</h2>
                            <p className="text-sm text-gray-500">{podcast.pubDate}</p>
                            {/* <img style={{maxHeight:`200px`}} src={podcast.itunes.image.attrs.href} /> */}
                            <p className="mt-4 text-gray-700 lg:w-8/12">{podcast.itunes.summary}</p>
                        </Link>
                        )
                })}
            </div>
          </div>
        </div>
        </div>
      </main>
    </Layout>
	);
};


export const query = graphql`
  query allPodcasts {
    allFeedPodcast {
    nodes {
      itunes {
        duration
        episode
        summary
        image {
          attrs {
            href
          }
        }
      }
      link
      pubDate
      title
      id
    }
  }
  }
`
