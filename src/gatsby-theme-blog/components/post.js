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
    <div className="mb-16 post-header">
      <h1 className="mb-3 text-4xl font-bold">{post.title}</h1>
      <p className="-mt-2 text-gray-600">{post.date}</p>
    </div>

		<article className="article space-y-8">
			<MDXRenderer>{post.body}</MDXRenderer>
		</article>

		<PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
