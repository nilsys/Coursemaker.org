import React from 'react';
import Layout from '../components/layout/layout';
import SEO from "../components/seo";

export default ({ pageContext, location }) => {
	const seo = {
		pageTitle: "Thank You",
	};
	return (
		<Layout>
			<SEO {...seo} />
			<section className="">
				<div className="container items-center py-8 lg:py-32">
					<div className="items-center block mx-auto lg:flex lg:w-9/12">
						<div className="text-center lg:text-left lg:w-1/2">
							<h2 className="mx-auto mt-6 text-2xl leading-normal md:text-5xl lg:mx-0 md:w-3/4">Thank you for joining us!</h2>
							<p className="mx-auto mt-6 font-light leading-relaxed md:text-xl lg:mx-0 md:w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>

						<div className="mt-10 lg:w-1/2 md:mt-0">
							<img className="block w-full" src={`../../signup.svg`} alt="Thanks for joining" />
						</div>
					</div>
				</div>
			</section>

		</Layout>
	);
};
