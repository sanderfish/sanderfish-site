import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const IndexPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark && data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <div className="pv2">
        <h3>Hey, I'm Sander.</h3>
        <h2>
          I help companies create, communicate and grow software products.
        </h2>
        <p>
          I'm a full stack developer/designer and entrepreneur. I can help your
          company build an MVP, redesign your application or website, add
          features to your existing application or create your new marketing
          site.
        </p>
        <p>
          I care about speed, SEO, accessibility and good UX. I believe software
          companies should launch fast and iterate often. The most important
          part of creating software is to get it out there for people to see and
          use.
        </p>
        <p>
          I grew up in the Netherlands and now travel by plane, train and{' '}
          <span style={{ textDecoration: 'line-through' }}>van</span> while working
          remotely. You can find me on Twitter at{' '}
          <a href="https://twitter.com/fishsander">@fishsander</a>.
        </p>
      </div>

      <div className="pv2">
        <h3>Recent work</h3>
        <ul className="w-80">
          <li className="pv2">
            <div className="pv1">
              <a href="https://checkoutpage.co" target="blank">
                Checkout Page
              </a>
            </div>
            <div className="pv1">
              Founder / Helping business owners and creators receive money
              online without writing code.
            </div>
            <div className="pv1">
              NodeJS, Koa, MongoDB, React, Styled Components, Stripe Connect,
              Heroku
            </div>
          </li>
          <li className="pv2">
            <div className="pv1">
              <a href="https://makeover.nl" target="blank">
                Makeover
              </a>
            </div>
            <div className="pv1">
              Freelance / Maintenance and development of content site, shopping feed, admin panel and data feed importer.
            </div>
            <div className="pv1">
              Next.js, Serverless, NodeJS, MongoDB, React, Sanity
            </div>
          </li>
          <li className="pv2">
            <div className="pv1">
              <a href="https://problem.studio" target="blank">
                Problem Studio
              </a>
            </div>
            <div className="pv1">
              Founder / Collaborating on wow-sites (with{' '}<a href="http://flowen.me" target="_blank">Flowen</a>).
            </div>
            <div className="pv1">
              React, Greensock, Animation
            </div>
          </li>
          <li className="pv2">
            <div className="pv1">
              <a href="https://limbic.ai" target="blank">
                Limbic
              </a>
            </div>
            <div className="pv1">
              Freelance / Development of data driven clinician dashboard and
              marketing site.
            </div>
            <div className="pv1">React, Styled-Components, Apollo GraphQL</div>
          </li>
          <li className="pv2">
            <div className="pv1">
              <a href="https://essentialcal.com" target="blank">
                Essential
              </a>
            </div>
            <div className="pv1">
              Founder / Scratching our own itch by building a weekly planner app
              to improve our focus (with{' '}
              <a href="http://stay-bold.com" target="blank">
                Stay Bold
              </a>
              ).
            </div>
            <div className="pv1">
              Meteor, React, Styled-Components, MongoDB, Heroku
            </div>
          </li>
        </ul>
      </div>

      {posts && posts.length > 0 && (
        <div className="pv2">
          <h3>Recent articles</h3>
          <ul>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;

              return (
                <li style={{ fontSize: '1.1125rem' }}>
                  <Link to={node.fields.slug}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="pv2">
        <h3>Receive my newsletter</h3>
        <p>
          Be the first to know about new articles and the products I launch.{' '}
          <a href="http://eepurl.com/cz6K85">Sign up to my email list</a>.
        </p>
      </div>

      <div className="pv2">
        <h3>Tools and technologies</h3>
        <div>
          <p>
            The tools and technologies I use depend on the project requirements,
            but my currently preferred stack exists of:
          </p>

          <ul>
            <li>Design: Figma</li>
            <li>
              Front end: JavaScript / React / Nextjs / Gatsby
            </li>
            <li>Back end: NodeJS / Express / MongoDB / Serverless</li>
          </ul>
        </div>
      </div>

      <div className="pv2">
        <h3>Let's work together!</h3>
        <p>
          I'm currently available for hire for contract/freelance projects. If
          you have a problem to solve and want to work together, contact me on
          Twitter (<a href="https://twitter.com/fishsander">@fishsander</a>), Telegram (<a href="https://t.me/sanderfish">@sanderfish</a>) or
          send me an email at{' '}
          <a href="mailto:sander@sanderfish.com">sander@sanderfish.com</a>.
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
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
