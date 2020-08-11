import React from 'react';
import Layout from '../gatsby-theme-blog/components/layout';
import SEO from "../components/seo";

export default ({ pageContext, location }) => {
	const seo = {
		pageTitle: "Contact",
	};
	return (
	<Layout>
		<SEO {...seo} />
		<article className="article space-y-8">

			<h1 id="privacy-policy">Contact</h1>
			<p>Questions? Email chris@coursemaker.org</p>

		</article>

	</Layout>
	);
};
