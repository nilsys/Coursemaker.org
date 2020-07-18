import React from 'react';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SchemaOrg from './SchemaOrg';

const SEO = ({ postData, postImage, isBlogPost, pageTitle }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            author
            organization {
              name
              url
              logo
            }
          }
        }
       }
    `}
    render={( { site: { siteMetadata: seo }, blogPost} ) => {
      const title = postData.title || pageTitle || seo.title;
      const description = postData.excerpt || seo.description;
      const image = postImage ? `${seo.siteUrl}${postImage}` : seo.image;
      const url = postData.slug
        ? `${seo.siteUrl}/${postData.slug}`
        : seo.siteUrl;
      // TODO: enable real date modified
      const datePublished = isBlogPost ? moment(postData.date).format("YYYY-MM-DD") : false;

      return (
        <React.Fragment>
          <Helmet>
            {/* General tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            //<meta name="image" content={image} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            {isBlogPost ? <meta property="og:type" content="article" /> : null}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            //<meta property="og:image" content={image} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
           // <meta name="twitter:image" content={image} />
          </Helmet>
          <SchemaOrg
            isBlogPost={isBlogPost}
            url={url}
            title={title}
            //image={image}
            description={description}
            datePublished={datePublished}
            dateModified={datePublished}
            siteUrl={seo.siteUrl}
            author={seo.author}
            organization={seo.organization}
            defaultTitle={seo.title}
          />
        </React.Fragment>
      );
    }}
  />
);

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.any,
      excerpt: PropTypes.any,
      dateModified: PropTypes.any
    }),
  }),
  postImage: PropTypes.string,
};

SEO.defaultProps = {
  isBlogPost: false,
  postData: { childMarkdownRemark: {} },
  postImage: null,
};

export default SEO;
