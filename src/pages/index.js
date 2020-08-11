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
								<Link to="/coming-soon/" className="mb-2 button">Sign up for the Beta</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="container relative">
					<div className="w-full pb-5 mx-auto lg:w-8/12 xl:w-6/12">
						<img className="block w-full shadow-lg" src={`../../home-1.png`} alt="Home 1" />
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
							<Link to="/coming-soon/" className="mt-6 button">Sign up for the Beta</Link>
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
							<Link to="/coming-soon/" className="mt-6 button">Sign up for the Beta</Link>
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
							<Link to="/coming-soon/" className="mt-6 button">Sign up for the Beta</Link>
						</div>
						<div className="lg:w-6/12">
							<img className="block w-full" src={`../../home-4.png`} alt="Home 4" />
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 bg-indigo-100">
				<div className="container">
					<div className="flex flex-wrap items-center mx-auto lg:w-11/12">
						<div className="mb-12 lg:w-4/12 lg:mb-0">
							<h2 className="mb-6 leading-tight">Blazing Fast Student Experience</h2>
							<p>Technology is at the heart of what we do. Your site will load crazily fast, and it will look great on all screen sizes.</p>
							<hr className="my-6" />
							<ul className="w-checkmark">
								<li>Blazing fast student experience</li>
								<li>SEO out of the box</li>
								<li>Student site optimized for all screen sizes</li>
							</ul>
							<Link to="/coming-soon/" className="mt-6 button">Sign up for the Beta</Link>
						</div>
						<div className="lg:w-2/12"></div>
						<div className="lg:w-4/12">
							<img className="block w-full" src={`../../home-6.png`} alt="Home 6" />
						</div>
					</div>
				</div>
			</section>

			<section id="home-why" className="relative py-16 overflow-hidden text-white bg-indigo-100 lg:py-24">
				<div style={{ background: '#0B0057' }} className="absolute top-0 bottom-0 left-0 w-full bg-indigo-100 rounded-bg top"></div>
				<div className="container relative mt-16">
					<h2 className="mb-10 text-center text-green-500">Why Choose CourseMaker?</h2>
					<div className="mx-auto lg:w-7/12">
						<div className="flex flex-wrap justify-between">
							<div className="lg:w-5/12">
								<img className="h-16 mb-3" src="../../home-icon-1.svg" alt="Talk to us" />
								<h3 className="mb-3 text-2xl font-bold text-green-500">Talk to us</h3>
								<p>Everyone says they have great customer service. Send us a question - go ahead! See how fast we reply.</p>
							</div>
							<div className="w-full h-px mt-10 mb-8 bg-white lg:w-px bg-opacity-25 separator lg:my-0 lg:h-auto"></div>
							<div className="lg:w-5/12">
								<div className="inline-flex h-16 mb-3 align-items">
									<img className="w-10/12" src="../../home-icon-2.svg" alt="For developers" />
								</div>
								<h3 className="mb-3 text-2xl font-bold text-green-500">For developers</h3>
								<p className="mb-3">If you are a technical course author, we have something special for you.</p>
								<Link className="link hover:underline" to="/coming-soon/">Learn More</Link>
							</div>
						</div>
					</div>

					<div className="mx-auto mt-24 text-center lg:w-6/12 testimonial">
						<h2 className="mb-10 text-green-500">Here's what people say</h2>
						<img className="inline-block mb-4" src="../../rating.svg" alt="Rating" />
						<p className="text-xl">“This is the platform I wish existed when I started out.”</p>
						<div className="flex items-center justify-center mt-10 text-left">
							<img className="object-cover w-12 h-12 rounded-full" src="../../person.jpg" alt="Person" />
							<div className="ml-4 info">
								<div className="font-bold">Chris Samiullah</div>
								<div className="text-sm font-light">Course Author</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Pricing />

		</Layout>
	);
};
