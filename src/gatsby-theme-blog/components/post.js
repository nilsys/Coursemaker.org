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

		<div className="fixed top-0 bottom-0 left-0 z-30 w-full bg-black popup-wrapper bg-opacity-75">
			<div className="container flex items-center justify-center h-full">
				<div className="relative w-full overflow-hidden bg-white rounded-lg shadow-lg popup md:w-auto lg:w-2/3">

					<div className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 bg-gray-200 cursor-pointer popup-closer">
						<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="iconfinder_ic_close_48px_352270" transform="translate(-6 -6)"><path id="Path" fill="#000" fill-rule="nonzero" d="M23.75 8.01875L21.98125 6.25 15 13.23125 8.01875 6.25 6.25 8.01875 13.23125 15 6.25 21.98125 8.01875 23.75 15 16.76875 21.98125 23.75 23.75 21.98125 16.76875 15z"/><path id="Path" d="M0 0L30 0 30 30 0 30z"/></g></g></svg>
					</div>

					<div className="flex flex-wrap">
						<div className="w-full bg-gray-200 md:w-1/2">
							<div className="p-10 pb-0 md:p-12 md:pb-0 content">
								<h3 class="mb-2">Read our free ebook</h3>
								<p class="text-gray-600">72 pages of awesome advice to create and sell your course</p>
							</div>
							<a href="/free-ebook" className="relative block pb-8 mt-6 overflow-hidden md:pb-12 md:mt-8 img-wrapper">
								<div className="absolute bottom-0 left-0 right-0 bg-green-200 wrapper-bg"></div>
								<img className="relative block w-4/12 mx-auto shadow-2xl" src={`../../ebook-cover.png`} alt="Book Cover" />
							</a>
						</div>

						<div className="flex flex-wrap items-center w-full md:w-1/2">
							<div className="w-full p-10 content md:p-12">
								<p className="mb-8 text-lg font-bold md:text-xl">Join our mailing list to receive your free copy in your mailbox</p>
								<form className="form-wrapper validate" action="https://coursemaker.us10.list-manage.com/subscribe/post?u=b66f35b93048b878a28ce7c92&amp;id=6169d6d8e1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
									<input className="w-full px-5 py-2 border border-gray-400 rounded" type="text" placeholder="First Name" name="FNAME" id="mce-FNAME" required />
									<input className="w-full px-5 py-2 border border-gray-400 rounded" type="email" placeholder="Email Address" name="EMAIL" id="mce-EMAIL" required />
									<div className="absolute invisible" aria-hidden="true">
										<input type="text" name="b_074a5f521f440ccfa7bacb4e3_8a4070226e" tabIndex="-1" />
									</div>
									<div className="absolute invisible" aria-hidden="true">
										<input type="text" name="b_074a5f521f440ccfa7bacb4e3_8a4070226e" tabIndex="-1" />
									</div>
									<input className="w-full mt-3 button" type="submit" value="Subscribe" id="mc-embedded-subscribe" />
								</form>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<section className="py-20">
			<div className="container">
				<div className="mx-auto lg:w-8/12">
					<div className="mb-16 post-header">
						<h1 className="mb-3 text-4xl font-bold">{post.title}</h1>
						<p className="-mt-2 text-gray-600">{post.date}</p>
					</div>

					<article className="article space-y-8">
						<MDXRenderer>{post.body}</MDXRenderer>
					</article>

					<PostFooter {...{ previous, next }} />
				</div>
			</div>
		</section>
  </Layout>
)

export default Post
