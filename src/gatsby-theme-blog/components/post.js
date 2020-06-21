import React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "./layout"
import SEO from "./seo"
import PostFooter from "./post-footer"
/* import PostTitle from "./post-title" */
/* import PostDate from "./post-date" */
/* import PostHero from "./post-hero" */

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO
      title={post.title}
      description={post.excerpt}
      imageSource={
        post.socialImage
          ? post.socialImage?.childImageSharp?.fluid.src
          : post.image?.childImageSharp?.fluid.src
      }
      keywords={post.keywords}
      imageAlt={post.imageAlt}
    />
    <div className="post-header mb-16">
      <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
      <p className="text-gray-600 -mt-2">{post.date}</p>
    </div>

		<article className="article space-y-8">
			<MDXRenderer>{post.body}</MDXRenderer>
		</article>

		<PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
