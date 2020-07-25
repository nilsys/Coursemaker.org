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
		<Layout>
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
								<Link className="mb-2 button">Get Started</Link>
								<div className="flex justify-center text-sm text-gray-600"><span>14-day free trial</span></div>
							</div>
						</div>
					</div>
				</div>

				<div className="container relative">
					<div className="w-full mx-auto lg:w-8/12 xl:w-6/12">
						<img className="block w-full" src={`../../home-1.png`} alt="Home 1" />
					</div>
				</div>
			</section>

			<section className="py-16 lg:py-20">
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
								<li>Lorem Ipsum is simply dummy text of the printing</li>
								<li>It is a long established fact that. <Link to="" className="link">Learn more</Link>
								</li>
								<li>There are many variations of passages</li>
								<li>Page when looking at its layout</li>
								<li>Lorem Ipsum available</li>
							</ul>
							<Link to="" className="mt-6 button">Get started</Link>
						</div>
						<div className="lg:w-6/12">
							<img className="block w-full" src={`../../home-3.png`} alt="Home 3" />
						</div>
					</div>
				</div>
			</section>

			<section className="py-12 lg:py-20">
				<div className="container">
					<div className="flex flex-wrap items-center justify-between mx-auto lg:w-11/12">
						<div className="mb-12 lg:w-5/12 lg:mb-0 lg:order-1">
							<h2 className="mb-6 leading-tight">Headaches? Handled.</h2>
							<p>We’ve spend hundreds of hours getting compliance right so that can focus on your business. We take care of GDPR, EU VAT, tax, and payments. No headaches for you.</p>
							<hr className="my-6" />
							<ul className="w-checkmark">
								<li>Lorem Ipsum is simply dummy text of the printing</li>
								<li>It is a long established fact that. <Link to="" className="link">Learn more</Link>
								</li>
								<li>There are many variations of passages</li>
								<li>Page when looking at its layout</li>
							</ul>
							<Link to="" className="mt-6 button">Get started</Link>
						</div>
						<div className="lg:w-6/12">
							<img className="block w-full" src={`../../home-4.png`} alt="Home 4" />
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
								<li>Lorem Ipsum is simply dummy text of the printing</li>
								<li>It is a long established fact that. <Link to="" className="link">Learn more</Link>
								</li>
								<li>Page when looking at its layout</li>
								<li>Lorem Ipsum available</li>
							</ul>
							<Link to="" className="mt-6 button">Get started</Link>
						</div>
						<div className="lg:w-7/12">
							<img className="block w-full" src={`../../home-5.png`} alt="Home 5" />
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
								<li>Lorem Ipsum is simply dummy text of the printing</li>
								<li>It is a long established fact that. <Link to="" className="link">Learn more</Link>
								</li>
								<li>Lorem Ipsum available</li>
							</ul>
							<Link to="" className="mt-6 button">Get started</Link>
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
							<div className="w-full h-px mt-10 mb-8 bg-white lg:w-px bg-opacity-25 separator lg:w-0 lg:my-0 lg:h-0"></div>
							<div className="lg:w-5/12">
								<div className="inline-flex h-16 mb-3 align-items">
									<img className="w-10/12" src="../../home-icon-2.svg" alt="For developers" />
								</div>
								<h3 className="mb-3 text-2xl font-bold text-green-500">For developers</h3>
								<p className="mb-3">If you are a technical course author, we have something special for you.</p>
								<Link className="link hover:underline" to="/developers">Learn More</Link>
							</div>
						</div>
					</div>

					<div className="mx-auto mt-24 text-center lg:w-6/12 testimonial">
						<h2 className="mb-10 text-green-500">Here's what people say</h2>
						<img className="inline-block mb-4" src="../../rating.svg" alt="Rating" />
						<p className="text-xl">“I love CourseMaker! The tools are super easy to navigate, and their team is super quick to help answer any questions you have.”</p>
						<div className="flex items-center justify-center mt-10 text-left">
							<img className="object-cover w-12 h-12 rounded-full" src="../../person.jpg" alt="Person" />
							<div className="ml-4 info">
								<div className="font-bold">John Smith</div>
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
