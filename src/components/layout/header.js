import { Link } from "gatsby";
import React, { useState } from 'react';
import LogoIcon from '../../svg/LogoIcon';

function Header() {

	const [isExpanded, toggleExpansion] = useState(false)

	return (

		<header className={`${ isExpanded ? `shadow` : `` } bg-white sticky lg:sticky top-0 left-0 w-full lg:py-6 transition-shadow duration-300 ease-in-out z-20`}>
			<div className="container flex flex-wrap items-center justify-between">
				<Link to="/" className="flex items-center text-2xl font-bold text-green-500 logo">CourseMaker</Link>

				<div className="block py-8 lg:hidden lg:py-0">
					<button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center border-blue-500">
						<svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>
				</div>

				<div className={`${ isExpanded ? `block` : `hidden` } 
					lg:flex text-gray-600 lg:space-x-8 lg:w-auto lg:space-y-0 lg:py-0 lg:border-t-0 w-full space-y-3 py-8 border-t items-center`}>
					<Link to="#product">Product</Link>
					<Link to="#pricing">Pricing</Link>
					<Link to="/blog">Blog</Link>
				</div>

			</div>
		</header>

	)
}

export default Header;
