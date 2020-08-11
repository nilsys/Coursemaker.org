import React from 'react';
import Layout from '../components/layout/layout';
import SEO from "../components/seo";

export default ({ pageContext, location }) => {
	const seo = {
		pageTitle: "Coming Soon",
	};
	return (
		<Layout>
			<SEO {...seo} />
			<section className="">
				<div className="container items-center pt-8 lg:pt-16 lg:flex lg:pb-32">
					<div className="text-center lg:text-left lg:w-1/2">

						<h2 className="mx-auto mt-6 leading-normal md:text-3xl lg:mx-0 md:w-3/4">
							An online course creation platform offering authors an incredible experience for a
							reasonable price.
						</h2>

						<p className="mx-auto mt-6 font-light leading-relaxed md:text-xl lg:mx-0 md:w-3/4">Coming September...subscribe to our mailing list to be eligible for
						a <b>50% Beta user discount</b></p>

						<form className="mt-8 form-wrapper md:mt-10 validate" action="https://coursemaker.us10.list-manage.com/subscribe/post?u=b66f35b93048b878a28ce7c92&amp;id=6169d6d8e1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
							<input className="w-full px-5 py-2 border border-gray-400 rounded sm:border-r-0 sm:w-auto sm:rounded-r-none" type="email" placeholder="Email Address" name="EMAIL" id="mce-EMAIL" required />
							<div className="absolute invisible" aria-hidden="true">
								<input type="text" name="b_074a5f521f440ccfa7bacb4e3_8a4070226e" tabIndex="-1" />
							</div>
							<input className="w-full mt-3 border border-green-500 button sm:mt-0 sm:rounded-l-none sm:w-auto" type="submit" value="Subscribe" id="mc-embedded-subscribe" />
						</form>

					</div>
					<div className="mt-10 lg:w-1/2 md:mt-0">
						<img className="block w-full" src={`../../hero-image.svg`} alt="Hero Image" />
					</div>
				</div>
			</section>

		</Layout>
	);
};
