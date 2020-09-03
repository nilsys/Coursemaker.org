import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from "../components/seo";
import Pricing from "../components/pricing";

export default ({ pageContext, location }) => {
	  const seo = {
			frontmatter: {
				// By default, get the slug from the page location.
				slug: location.pathname.replace(/[^\w\d-]/g, ''),
				...pageContext.frontmatter,
			},
  	};
	return (
		<Layout footerHr="true">
			<SEO {...seo} />

			<section id="start-here">

				<div id="row-1" className="py-16 bg-indigo-100 md:py-24">
					<div className="container">
						<h2 className="mb-8 md:mb-10">You're thinking of creating an online course</h2>
						<div className="post-list grid md:grid-cols-3 gap-6">
							<Link href="/post-link" className="block px-8 py-6 bg-white border-t border-gray-200 rounded-lg shadow hover:shadow-lg transition transition-all duration-100">
								<div class="text-lg lg:text-xl mb-5 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
								<div className="button">Read more</div>
							</Link>
							<Link href="/post-link" className="block px-8 py-6 bg-white border-t border-gray-200 rounded-lg shadow hover:shadow-lg transition transition-all duration-100">
								<div class="text-lg lg:text-xl mb-5 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
								<div className="button">Read more</div>
							</Link>
							<Link href="/post-link" className="block px-8 py-6 bg-white border-t border-gray-200 rounded-lg shadow hover:shadow-lg transition transition-all duration-100">
								<div class="text-lg lg:text-xl mb-5 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
								<div className="button">Read more</div>
							</Link>
						</div>
					</div>
				</div>

				<div id="row-2" className="py-16 bg-white md:py-24">
					<div className="container">
						<h2 className="mb-8 md:mb-10">Choosing where to build an online course</h2>
						<div className="post-list grid md:grid-cols-3 gap-6">
							<Link href="/post-link" className="block px-8 py-6 bg-white border-t border-gray-200 rounded-lg shadow hover:shadow-lg transition transition-all duration-100">
								<div class="text-lg lg:text-xl mb-5 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
								<div className="button">Read more</div>
							</Link>
							<Link href="/post-link" className="block px-8 py-6 bg-white border-t border-gray-200 rounded-lg shadow hover:shadow-lg transition transition-all duration-100">
								<div class="text-lg lg:text-xl mb-5 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
								<div className="button">Read more</div>
							</Link>
							<Link href="/post-link" className="block px-8 py-6 bg-white border-t border-gray-200 rounded-lg shadow hover:shadow-lg transition transition-all duration-100">
								<div class="text-lg lg:text-xl mb-5 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
								<div className="button">Read more</div>
							</Link>
						</div>
					</div>
				</div>

				<div id="row-3" className="py-16 bg-indigo-100 md:py-24">
					<div className="container">
						<h2 className="mb-8 md:mb-10">Selling an online course</h2>
						<div className="post-list grid md:grid-cols-3 gap-6">
							<Link href="/post-link" className="block px-8 py-6 bg-white border-t border-gray-200 rounded-lg shadow hover:shadow-lg transition transition-all duration-100">
								<div class="text-lg lg:text-xl mb-5 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
								<div className="button">Read more</div>
							</Link>
							<Link href="/post-link" className="block px-8 py-6 bg-white border-t border-gray-200 rounded-lg shadow hover:shadow-lg transition transition-all duration-100">
								<div class="text-lg lg:text-xl mb-5 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
								<div className="button">Read more</div>
							</Link>
							<Link href="/post-link" className="block px-8 py-6 bg-white border-t border-gray-200 rounded-lg shadow hover:shadow-lg transition transition-all duration-100">
								<div class="text-lg lg:text-xl mb-5 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
								<div className="button">Read more</div>
							</Link>
						</div>
					</div>
				</div>

			</section>

		</Layout>
	);
};
