import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
		<script
			key="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
			src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
      crossOrigin="anonymous"
      defer
		/>
  ])
}
