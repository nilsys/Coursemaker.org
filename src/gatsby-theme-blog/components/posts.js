import React from "react"
import { Link } from 'gatsby';
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
			<section id="featured-post" className="py-16 overflow-hidden bg-green-200 md:py-20 featured">
				<div className="container">
					<div className="flex flex-wrap items-center">
						<div className="w-full md:w-1/2">
							<h4 className="mb-3 tracking-wider uppercase opacity-75">featured</h4>
							<h2 className="mb-5 md:mb-10">Free Guide: How To Create and Sell Online Courses</h2>
							<Link to="/coming-soon/" className="mb-2 button">Check free ebook</Link>
						</div>
						<div className="w-full mt-10 md:w-1/2 img-wrapper md:mt-0">
							<img className="relative block w-4/12 mx-auto shadow-2xl" src={`../../book-cover.jpeg`} alt="Book Cover" />
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-gray-100 md:py-20">
				<div className="container">
					<div className="mx-auto post-list md:w-8/12 space-y-4 md:space-y-6">
						<PostList posts={posts} />
					</div>
				</div>
			</section>
    </Layout>
  )
}
export default Posts
