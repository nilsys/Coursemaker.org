import React from 'react';
import Layout from '../components/layout/layout';
import SEO from "../components/seo";

export default ({ pageContext, location }) => {
	function Iframe(props) {
  	return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
	}
	const seo = {
		pageTitle: "Podcast",
	};
	const iframe = '<iframe title="test2" height="122" width="100%" style="border: none;" scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/3w4bv-e6fef2?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=107"></iframe>'
	return (
		<Layout>
			<SEO {...seo} />
			<section className="">
				<div className="container items-center pt-8 lg:pt-16 lg:flex lg:pb-32">
					<div className="text-center lg:text-left lg:w-1/2">

						<h2 className="mx-auto mt-6 leading-normal md:text-3xl lg:mx-0 md:w-3/4">
							The CourseMaker Podcast
						</h2>


					</div>
					<div className="mt-10 lg:w-1/2 md:mt-0">
						<Iframe iframe={iframe} />,
					</div>
				</div>
			</section>

		</Layout>
	);
};
