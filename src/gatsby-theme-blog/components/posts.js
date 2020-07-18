import React from "react"

import Layout from "./layout"
import PostList from "./post-list"
import SEO from "../../components/seo";

const Posts = ({ location, posts, siteTitle, socialLinks, pageContext }) => {
	const seo = {
			pageTitle: "All blog posts",
		};
  return (
    <Layout location={location} title={siteTitle} >
      <SEO {...seo} />
      <div className="post-list">
      <PostList posts={posts} />
    </div>
    </Layout>
  )
}
export default Posts
