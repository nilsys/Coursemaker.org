import { Link } from "gatsby";
import React, { useState } from 'react';
import LogoIcon from '../../svg/LogoIcon';

import styles from '../../css/page.css'

function Header() {

	const [isExpanded, toggleExpansion] = useState(false)

	return (

		<header className={`${ isExpanded ? `shadow` : `` } bg-white sticky mb-10 md:mb-20 lg:fixed top-0 left-0 w-full transition-shadow duration-300 ease-in-out z-20 is-alt`}>

			<div className="container lg:py-6">
				<div className="flex flex-wrap justify-between items-center">
					<Link to="/" className="logo flex items-center text-2xl">
						<div className="w-12 mr-3">
							<LogoIcon />
						</div>
						<span>CourseMaker</span>
					</Link>

					<div className="block lg:hidden py-8 lg:py-0">
						<button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center border-blue-500">
							<svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
						</button>
					</div>

					<div className={`${ isExpanded ? `block` : `hidden` } lg:flex lg:space-x-8 lg:w-auto lg:space-y-0 lg:py-0 lg:border-t-0 w-full space-y-3 py-8 border-t items-center`}>
						<li className="list-none">
							<Link to="/">Home</Link>
						</li>
					</div>
				</div>

			</div>
		</header>

	)
}

export default Header;
