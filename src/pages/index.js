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
          I (help companies) create, maintain, scale and communicate software
          products.
        </h2>
        <p>
          I'm an entrepreneur and full stack developer/designer. I can help you
          build your MVP, redesign your application or website, add features to
          your existing application or create your new marketing site.
        </p>
        <p>
          I care about speed, SEO, accessibility and good UX. I believe it's
          important for companies to ship fast and iterate quickly. The most
          important part is to get the work out there for people to see and use.
        </p>
        <p>
          I grew up in the Netherlands and now travel and work throughout Europe
          by plane, train and van. You can find me on Twitter at{' '}
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
              <a href="https://essentialcal.co" target="blank">
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
          <li className="pv2">
            <div className="pv1">
              <a href="https://www.bijlesmatch.nl" target="blank">
                BijlesMatch
              </a>
              <br />
            </div>
            <div className="pv1">
              Freelance / Maintenance and development of a customer portal and
              admin dashboard
              <br />
            </div>
            <div className="pv1">PHP (Zend Framework), MySQL, </div>
          </li>
          <li className="pv2">
            <div className="pv1">
              <a href="https://www.bookinglayer.com/en/" target="blank">
                Bookinglayer
              </a>
              <br />
            </div>
            <div className="pv1">
              Freelance / Design and development of marketing website (with{' '}
              <a href="http://stay-bold.com" target="blank">
                Stay Bold
              </a>
              ).
              <br />
            </div>
            <div className="pv1">Jekyll, Markdown, Sass, Foundation</div>
          </li>
          <li className="pv2">
            <div className="pv1">
              <a href="https://convertcalculator.co" target="blank">
                ConvertCalculator Checkout
              </a>
              <br />
            </div>
            <div className="pv1">
              Freelance / Adding Stripe Connect checkout functionality to
              existing application.
              <br />
            </div>
            <div className="pv1">Meteor, React, Stripe Connect</div>
          </li>
          <li className="pv2">
            <div className="pv1">
              <a href="http://wordeys.com" target="blank">
                Wordeys
              </a>
              <br />
            </div>
            <div className="pv1">
              Founder / Helping people practise vocabulary online.
              <br />
            </div>
            <div className="pv1">
              Ruby on Rails, PostgreSQL, Vanilla JS, Sass, Heroku
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
            <li>Design: Sketch / Figma</li>
            <li>
              Front end: JavaScript / React / Styled Components / Tailwind CSS
            </li>
            <li>Back end: NodeJS / Express / Koa</li>
          </ul>
        </div>
      </div>

      <div className="pv2">
        <h3>Let's work together!</h3>
        <p>
          I'm currently available for hire for contract/freelance projects. If
          you have a problem to solve and want to work together, contact me on
          Twitter (<a href="https://twitter.com/fishsander">@fishsander</a>) or
          send me an email at{' '}
          <a href="mailto:sander@sanderfish.nl">sander@sanderfish.nl</a>.
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
