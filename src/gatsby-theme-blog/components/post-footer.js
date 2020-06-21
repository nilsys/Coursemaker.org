import React from "react"
import { Link } from "gatsby"

const Footer = ({ previous, next }) => (
  <footer className="mt-16 border-t border-b border-gray-400">
    {(previous || next) && (
      <div className="md:flex justify-between">
        <div class="flex w-full md:w-1/2 border-0 md:border-r border-gray-400">
          {previous && (
            <Link className="py-3 md:py-6 block w-full text-center" to={previous.slug} rel="prev">
              ← {previous.title}
            </Link>
          )}
        </div>
        <div class="flex justify-center w-full md:w-1/2 border-t md:border-0">
          {next && (
            <Link className="py-3 md:py-6 block w-full text-center" to={next.slug} rel="next">
              {next.title} →
            </Link>
          )}
        </div>
      </div>
    )}
  </footer>
)

export default Footer
