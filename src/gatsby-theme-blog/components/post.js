import React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "./layout"
import SEO from "../../components/seo"
import PostFooter from "./post-footer"


const Post = ({
  data: {
    post,
    frontmatter
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location}>
    <SEO
        postData={post}
        frontmatter={frontmatter}
        isBlogPost
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
