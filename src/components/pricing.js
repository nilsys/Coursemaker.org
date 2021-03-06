import React, { useState } from "react";
import { Link } from "gatsby";

const Pricing = () => {

	const [annual, chargeAnnually] = useState(false);
	const togglePricing = () => {
		chargeAnnually(!annual);
	}

	const plans = [
		{
			name: "Starter",
			price: 9,
			features: [
				{
					title: 'Unlimited Videos'
				},
				{
					title: 'Unlimited Students'
				},
				{
					title: '$5 fee per course sale'
				},
				{
					title: '1 course'
				},
				{
					title: '1 Admin User'
				},
				{
					title: 'Out of the box SEO'
				},
				{
					title: 'Out of the box GDPR compliance'
				},
				{
					title: 'Blazing fast mobile responsive student site',
					info: false,
					detail: 'Some long description about this feature'
				},
				{
					title: 'Track student progress'
				},
				{
					title: 'Google Analytics integration'
				},
			]
		},
		{
			name: 'Standard',
			price: 25,
			features: [
				{
					title: 'Up to 5 courses'
				},
				{
					title: '$3 fee per course sale ($1 for membership renewals)'
				},
				{
					title: '2 Admin Users'
				},
				{
					title: '3 X 1-on-1 Course Business Coaching Session'
				},
				{
					title: 'Unlimited authors'
				},
				{
					title: 'Custom domain with SSL'
				},
				{
					title: 'Memberships',
					info: false,
					detail: 'Some long description about this feature'
				},
				{
					title: 'Free migrations',
					info: true,
					detail: 'We will do the work to migrate the course for you if you like'
				},
				{
					title: 'Coupons'
				},
			]
		},
		{
			name: 'Growth',
			price: 75,
			features: [
				{
					title: 'Up to 20 courses'
				},
				{
					title: '$1 fee per course sale ($0.50 for membership renewals)'
				},
				{
					title: 'Up to 10 Admin Users'
				},
				{
					title: 'Monthly 1-on-1 Course Business Coaching Sessions'
				},
				{
					title: 'Priority suppport',
				},
			]
		}
	];

	return (
		<section id="pricing" class="py-16 lg:py-24 bg-indigo-100">
			<div class="container">
				<div className="mx-auto lg:w-10/12 inner">
					<h2 class="text-center mb-6">Finally. An Affordable Course Platform</h2>
					<div className="px-5 py-3 text-center text-orange-700 bg-yellow-100 border border-orange-300 rounded">
						<strong>Limited time offer!</strong>
						<span className="ml-3">Sign up for our private Beta to get 50% off prices shown below for one year.</span>
					</div>

					<div className="my-6 text-center text-gray-700 annual-plan">
						<div className="inline-flex items-center custom-checkbox">
							<input id="checkbox" type="checkbox" onChange={togglePricing} />
							<div className="toggle"></div>
							<label className="pl-3" htmlFor="checkbox">Charge annually
								<span className="text-green-500"> (save 25%)</span>
							</label>
						</div>
					</div>

					<div className="flex flex-wrap -mx-3 lg:-mx-4 card-list">
						{plans.map((plan) => {
							return (
								<div className="w-full p-3 lg:px-4 md:w-4/12">
									<div className="flex flex-wrap h-full px-8 py-6 bg-white rounded-lg shadow transition-shadow duration-300 hover:shadow-xl card">
										<div className="w-full">
											<h3 className={`
											${ plan.name === 'Standard' ? 'text-blue-500' : '' }
											${ plan.name === 'Pro' ? 'text-green-500' : '' }
											text-center`}>{plan.name}</h3>
											<div className="flex items-center justify-center pricing">
												<div className="text-2xl font-bold">$
													{annual ? (
														(plan.price) - (plan.price * 0.25)
													) : (
														plan.price
													)}
												</div>
												{ annual ? ((<div>/mo</div>)) : (<div>/mo</div>) }
											</div>
											<hr className="my-4" />
											<ul className="mb-6 text-sm text-gray-700 features space-y-2">
												{plan.name === 'Standard' && (
													<li className="font-bold">Everything in Starter, plus:</li>
												)}
												{plan.name === 'Growth' && (
													<li className="font-bold">Everything in Standard, plus:</li>
												)}
												{plan.features.map((feature) => {
													return (
														<li>
															{feature.title}
															{feature.info && (
																<span className="ml-2 text-black">&#9432;</span>
															)}
														</li>
													)
												})}
											</ul>
										</div>
										<div className="w-full mt-auto text-center">
											<Link to="/coming-soon" className="block button">Sign up for the Beta</Link>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Pricing;
