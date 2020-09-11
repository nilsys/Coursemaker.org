import { Link } from "gatsby";
import React from 'react';

const Footer = () => (
  <footer className="text-gray-600 bg-indigo-100">
		<div className="container">
			<div className="py-8 inner">
				<div className="items-center md:flex">
					<Link className="block" to="/">
						<img className="block w-32" src={`../../logo.svg`} alt="CourseMaker" />
					</Link>
					<div className="flex mt-3 ml-auto text-sm md:mt-0 space-x-6">
						<Link to="/contact/">Contact</Link>
						<Link to="/privacy-policy/">Privacy</Link>
					</div>
				</div>
			</div>
		</div>
  </footer>
);

export default Footer;
