import React from 'react';
import Layout from '../components/layout/layout';
import HeroImage from '../svg/HeroImage';
import SEO from "../components/seo";

export default ({ pageContext, location }) => {
	  const seo = {
			frontmatter: {
				// By default, get the slug from the page location.
				slug: location.pathname.replace(/[^\w\d-]/g, ''),
				...pageContext.frontmatter,
			},
  	};
	return (
		<Layout>
			<SEO {...seo} />
			<section className="md:h-screen">
				<div className="container h-full lg:flex items-center">
					<div className="text-center lg:text-left lg:w-1/2">

						<h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-none">
							CourseMaker
						</h1>

						<h2 className="md:text-2xl mx-auto lg:mx-0 md:w-3/4 mt-6 font-light leading-relaxed">
							An online course creation platform offering authors an incredible experience for a
							reasonable price.
						</h2>

						<p className="md:text-2xl mx-auto lg:mx-0 md:w-3/4 mt-6 font-light leading-relaxed">Coming Soon...subscribe here
						to be informed about the launch</p>

						<form className="form-wrapper mt-8 md:mt-10 validate" action="https://coursemaker.us10.list-manage.com/subscribe/post?u=b66f35b93048b878a28ce7c92&amp;id=6169d6d8e1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
							<input className="w-full sm:w-auto px-5 py-3 border border-gray-400 rounded sm:rounded-r-none" type="email" placeholder="Email Address" name="EMAIL" id="mce-EMAIL" required />
							<div className="absolute invisible" aria-hidden="true">
								<input type="text" name="b_074a5f521f440ccfa7bacb4e3_8a4070226e" tabIndex="-1" />
							</div>
							<input className="button mt-3 sm:mt-0 sm:rounded-l-none w-full sm:w-auto" type="submit" value="Subscribe" id="mc-embedded-subscribe" />
						</form>

					</div>
					<div className="lg:w-1/2 mt-10 md:mt-0">
						<HeroImage />
					</div>
				</div>
			</section>

		</Layout>
	);
};
