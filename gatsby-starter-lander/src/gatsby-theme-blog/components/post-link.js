import { Link } from 'gatsby'

const PostLink = ({ title, slug, date, excerpt }) => (
	<Link id={ slug.replace(/^\/|\/$/g, '') } to={ slug } className="block border-b border-gray-200 py-8 first:bg-black">
		<h2 class="text-xl lg:text-2xl">{ title }</h2>
		<p className="text-sm text-gray-500">{ date }</p>
		<p className="mt-4 text-gray-700">{ excerpt }</p>
	</Link>
)

export default PostLink
