import React from 'react';
import Link from 'gatsby-link';

import Layout from '../components/Layout';

const Articles = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <ul>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;

          return (
            <li>
              <Link to={node.fields.slug}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Articles;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
