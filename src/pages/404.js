import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import HeroImage from "../svg/HeroImage";

export default ({ pageContext, location }) => {
	return (
		<Layout>
			<section className="md:h-screen">
				<div className="container h-full lg:flex items-center">
					<div className="text-center lg:text-left lg:w-1/2">

						<h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-none">
							Sorry this page could not be found!
						</h1>
          </div>
        </div>
			</section>
		</Layout>
	);
};
