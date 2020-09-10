import React from 'react'
import Layout from './layout/layout';
import SEO from "./seo";
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from 'gatsby'
import 'react-h5-audio-player/lib/styles.css';

// Template for individual podcast pages, sourced from the RSS feed, and markdown files in content/podcast
const CompPage = ({data, pageContext}) => {
    const pageMdx = data.mdx // Data from MDX files
    const pageData = pageMdx.frontmatter;
    const seo = {
          pageTitle: pageData.title
    };

    return (
        <Layout>
          <SEO {...seo} />
          <main className="py-16 text-gray-900 lg:py-24">
            <div className="container">
              <div className="flex justify-center">
                <div className="w-full xl:w-9/12">

                  <div className="mb-16 post-header">
                      <h1 className="mb-3 text-4xl font-bold">{pageData.title}</h1>
                      <p className="-mt-2 text-gray-600">{pageData.date}</p>
                  </div>

                  <article className="article space-y-8">
                      {/* Podcast HTML, always prefix with podcastMdx && because not every episode may have a custom markdown file */}
                      {pageMdx && <MDXRenderer>{pageMdx.body}</MDXRenderer>}
                  </article>
                  <br />
                  <Link to="/blog/" style={{fontWeight:`bold`, marginTop:`20px`}}>View all articles</Link>
                </div>
              </div>
            </div>
          </main>
        </Layout>
    )
}

export default CompPage

export const query = graphql`
  query ComparisonPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`