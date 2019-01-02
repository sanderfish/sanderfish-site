import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1>{post.frontmatter.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />

      <hr />

      <p>Published on {post.frontmatter.date}</p>

      <hr />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
