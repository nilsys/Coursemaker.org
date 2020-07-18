import { Link } from "gatsby";
import React from 'react';

const Footer = () => (
  <footer className="text-gray-800 pb-12 mt-20 md:mt-0 md:pb-24">
		<div className="container">
			<hr className="pt-12 md:pt-24" />

			<div className="md:flex md:-mx-3 space-y-6 md:space-y-0">
				<div className="flex-1 md:px-3">
					<h2 className="footer-title mb-2 md:mb-4">Disclaimers</h2>
					<p className="leading-relaxed">All opinions are those of CourseMaker.<br/>
						&copy; 2020 CourseMaker.
					</p>
				</div>
				<div className="flex-1 md:px-3">
					<h2 className="footer-title mb-2 md:mb-4">Important Links</h2>
					<ul className="leading-loose">
						<li>
							<Link to="/privacy-policy">Privacy Policy</Link>
						</li>
					</ul>
				</div>
				<div className="flex-1 md:px-3">
					<h2 className="footer-title mb-2 md:mb-4">Social Media</h2>
					<ul className="leading-loose">
						<li>
							<a href="https://www.youtube.com">Youtube</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
  </footer>
);

export default Footer;
