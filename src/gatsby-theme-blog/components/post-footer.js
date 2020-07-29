import React from "react"
import { Link } from "gatsby"

const Footer = ({ previous, next }) => (
  <footer className="mt-16 border-t border-b border-gray-400">
    {(previous || next) && (
      <div className="justify-between md:flex">
        <div class="flex w-full md:w-1/2 border-0 md:border-r border-gray-400">
          {previous && (
						<Link className="block w-full p-3 px-5 text-center md:py-6 transition duration-300 hover:text-green-500" to={previous.slug} rel="prev">
              ← {previous.title}
            </Link>
          )}
        </div>
        <div class="flex justify-center w-full md:w-1/2 border-t md:border-0">
          {next && (
            <Link className="block w-full px-5 py-3 text-center md:py-6 transition duration-300 hover:text-green-500" to={next.slug} rel="next">
              {next.title} →
            </Link>
          )}
        </div>
      </div>
    )}
  </footer>
)

export default Footer
