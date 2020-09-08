import React from 'react'
import Layout from './layout/layout';
import SEO from "./seo";
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from 'gatsby'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// Template for individual podcast pages, sourced from the RSS feed, and markdown files in content/podcast
const Podcast = ({data, pageContext}) => {
    const podcast = data.feedPodcast // Data from the RSS feed
    const podcastMdx = data.mdx // Data from MDX files
    const audioUrl = podcast.enclosure.url

    return (
        <Layout>
          <main className="py-16 text-gray-900 lg:py-24">
            <div className="container">
              <div className="flex justify-center">
                <div className="w-full xl:w-9/12">
                  
                  <div className="mb-16 post-header">
                      <h1 className="mb-3 text-4xl font-bold">{podcast.title}</h1>
                      <p className="-mt-2 text-gray-600">{podcast.pubDate}</p>
                      <p style={{marginTop:`20px`}} className="-mt-2 text-gray-600">{podcast.itunes.summary}</p>
                  </div>
                  
                  <AudioPlayer
                        autoPlay={false}
                        src={audioUrl}
                        customAdditionalControls={[]}
                        header={podcast.title}
                        style={{marginBottom:`20px`}}
                        // for more customization, check: https://github.com/lhz516/react-h5-audio-player
                      />

                  <article className="article space-y-8">
                    {/* Frontmatter and data from the RSS feed can be added as below */}
                      {/* <img style={{width:`100px`}} src={podcast.itunes.image.attrs.href} /> */}
                      {/* <a href={podcast.link}>Listen here</a> */}
                      {/* <p>{podcastMdx && podcastMdx.frontmatter.date}</p> */}

                      {/* Podcast HTML, always prefix with podcastMdx && because not every episode may have a custom markdown file */}
                      {podcastMdx && <MDXRenderer>{podcastMdx.body}</MDXRenderer>} 
                  </article>
                  <Link to="/podcast/" style={{fontWeight:`bold`, marginTop:`20px`}}>View all podcasts</Link>
                </div>
              </div>
            </div>
          </main>
        </Layout>
    )
}

export default Podcast

export const query = graphql`
  query FeedPodcast($id: String, $episode: String) {
  feedPodcast(id: {eq: $id}) {
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
    id
    title
    pubDate
    link
    enclosure {
      url
    }
  }
  mdx(frontmatter: {episode: {eq: $episode}}) {
    frontmatter {
      title
      date
    }
    body
  }
}
`
