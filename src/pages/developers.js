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
			<section id="home-hero" class="text-center overflow-hidden">
				<div className="relative py-20 pb-10 content">
					<div className="absolute top-0 bottom-0 left-0 w-full bg-indigo-100 rounded-bg bottom">
					</div>
					<div className="container relative">
						<div className="mx-auto xl:w-4/12 lg:w-6/12">
							<h2 className="mb-2 md:mb-0">Make Online Courses</h2>
							<h4 className="mb-4 text-xl text-gray-600 lg:text-2xl">Easy. Elegant. Affordable.</h4>
							<p>We take care of all the hassle so you can focus on running your online course business.</p>
							<div className="mt-10 button-wrapper text-wrapper">
								<Link to="/coming-soon" className="mb-2 button">Sign up for the Beta</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="container relative">
					<div className="w-full pb-5 mx-auto lg:w-8/12 xl:w-6/12">
						<div className="shadow-lg responsive-video">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/o7Pv6bjCICU" 
								frameBorder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
					</div>
				</div>
			</section>

			<section id="product" className="py-16 lg:py-20">
				<div className="container">
					<h2 className="mb-12 md:text-center">Everything you need in one place</h2>
					<img className="block w-full mx-auto lg:w-9/12" src={`../../home-2.png`} alt="Home 2" />
				</div>
			</section>

			<section className="py-12 lg:py-20">
				<div className="container">
					<div className="flex flex-wrap items-center justify-between mx-auto lg:w-11/12">
						<div className="mb-12 lg:w-5/12 lg:mb-0">
							<h2 className="mb-6">Grow Your Online Course Business</h2>
							<p>CourseMaker supports you every step, and offers advanced features as standard. From ultra-affordable 
							memberships to detailed student analytics, we focus on giving you the tools you need.</p>
							<hr className="my-6" />
							<ul className="w-checkmark">
								<li>Memberships available on all plans</li>
								<li>Unlimited video and students on all plans </li>
								<li>Custom domains + SSL available on all plans</li>
								<li>Precise tracking and student analytics</li>
								<li>You own your content and email list</li>
							</ul>
							<Link to="/coming-soon" className="mt-6 button">Sign up for the Beta</Link>
						</div>
						<div className="lg:w-6/12">
							<img className="block w-full" src={`../../home-3.png`} alt="Home 3" />
						</div>
					</div>
				</div>
			</section>

		<section className="py-24">
				<div className="container">
					<div className="flex flex-wrap items-center justify-between mx-auto lg:w-11/12">
						<div className="mb-12 lg:w-4/12 lg:mb-0">
							<h2 className="mb-6 leading-tight">A Seamless Course Creation Experience</h2>
							<p className="leading-relaxed">Your time is valuable. We make the creation process as frictionless as possible so that you can get things done quickly. With CourseMaker, you can work with tools you already know.</p>
							<hr className="my-6" />
							<ul className="w-checkmark">
								<li>Clean course building interface</li>
								<li>Free migrations - yes, really!</li>
								<li>Support 7 days per week, 365 days per year</li>
								<li>Optional markdown and GitHub integration</li>
							</ul>
							<Link to="/coming-soon" className="mt-6 button">Sign up for the Beta</Link>
						</div>
						<div className="lg:w-7/12">
							<img className="block w-full" src={`../../home-5.png`} alt="Home 5" />
						</div>
					</div>
				</div>
			</section>


			<section className="py-12 lg:py-20">
				<div className="container">
					<div className="flex flex-wrap items-center justify-between mx-auto lg:w-11/12">
						<div className="mb-12 lg:w-5/12 lg:mb-0 lg:order-1">
							<h2 className="mb-6 leading-tight">Headaches? Handled.</h2>
							<p>We provide solutions for handling EU VAT and are GDPR compliant. No headaches for you.</p>
							<hr className="my-6" />
							<ul className="w-checkmark">
								<li>EU VAT solution</li>
								<li>GDPR Compliant</li>
								<li>No Transaction Fees</li>
							</ul>
							<Link to="/coming-soon" className="mt-6 button">Sign up for the Beta</Link>
						</div>
						<div className="lg:w-6/12">
							<img className="block w-full" src={`../../home-4.png`} alt="Home 4" />
						</div>
					</div>
				</div>
			</section>

			<Pricing />

		</Layout>
	);
};
