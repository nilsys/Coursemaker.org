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
							<h2 className="mb-5 md:mb-10">Free Ebook: The Ultimate Guide to Creating and Selling Online Courses</h2>
							<h4>Subscribe to our email list to receive your free copy</h4>
										<form className="flex flex-wrap mt-5 form-wrapper validate" action="https://coursemaker.us10.list-manage.com/subscribe/post?u=b66f35b93048b878a28ce7c92&amp;id=6169d6d8e1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
										<div className="fname-field-blog w-full md:w-7/12">
											<input className="w-full px-5 py-2 border border-gray-400 rounded-lg" type="text" placeholder="First Name" name="FNAME" id="mce-FNAME" required />
										</div>
										<div className="w-full md:w-7/12">
											<input className="w-full px-5 py-2 border border-gray-400 rounded-lg" type="email" placeholder="Email Address" name="EMAIL" id="mce-EMAIL" required />
										</div>
										<div className="absolute invisible" aria-hidden="true">
											<input type="text" name="b_074a5f521f440ccfa7bacb4e3_8a4070226e" tabIndex="-1" />
										</div>
										<div className="w-full mt-4 md:w-5/12 md:pl-5 md:mt-0">
											<input className="w-full border border-green-500 button" type="submit" value="Subscribe" id="mc-embedded-subscribe" />
										</div>
									</form>
						</div>
						<div className="w-full mt-10 md:w-1/2 img-wrapper md:mt-0">
							<img className="relative block w-4/12 mx-auto shadow-2xl" src={`../../ebook-cover.png`} alt="Book Cover" />
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
