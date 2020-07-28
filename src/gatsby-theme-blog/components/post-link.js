import { Link } from 'gatsby'

const PostLink = ({ title, slug, date, excerpt }) => (
	<Link id={ slug.replace(/^\/|\/$/g, '') } to={ slug } className="block px-10 py-8 bg-white rounded-lg shadow hover:shadow-lg transition transition-all duration-300">
		<h2 class="text-xl lg:text-2xl">{ title }</h2>
		<p className="text-sm text-gray-500">{ date }</p>
		<p className="mt-4 text-gray-700 lg:w-8/12">{ excerpt }</p>
	</Link>
)

export default PostLink
