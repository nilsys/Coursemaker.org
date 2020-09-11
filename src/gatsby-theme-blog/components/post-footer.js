import React from "react"
import { Link } from "gatsby"

const Footer = ({ previous, next }) => (
	<div className="mt-16">
		<div className="p-8 bg-green-200 rounded-lg shadow-lg md:p-10">
			<p className="text-xl text-gray-700">If you found this guide useful, please consider signing up to our mailing list. We publish useful tips for new and experienced course authors regularly.</p>

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

		<footer className="mt-8">
			{(previous || next) && (
				<div className="justify-between md:flex">
					<div class="flex w-full md:w-1/2 md:pr-4">
						{previous && (
							<Link className="block w-full p-3 px-5 text-center bg-white border border-gray-300 rounded-lg shadow-lg md:py-6 transition duration-300 hover:text-green-500" to={previous.slug} rel="prev">
								← {previous.title}
							</Link>
						)}
					</div>
					<div class="flex w-full md:w-1/2 md:pl-4">
						{next && (
							<Link className="block w-full p-3 px-5 text-center bg-white border border-gray-300 rounded-lg shadow-lg md:py-6 transition duration-300 hover:text-green-500" to={next.slug} rel="next">
								{next.title} →
							</Link>
						)}
					</div>
				</div>
			)}
		</footer>
	</div>
)

export default Footer
