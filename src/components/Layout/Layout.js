import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import favicon from '../../assets/favicon.ico';
import '../../styles/main.scss';

const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const FooterLink = styled.h2`
  margin-right: 1em;
`;

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Sanderfish | Bootstrapper, Developer and Product Designer"
      meta={[
        {
          name: 'description',
          content: `Sander Visser is a digital nomad, bootstrapper, developer and product designer. He loves to develop and design digital products, web apps and websites.`,
        },
        { name: 'robots', content: 'index, follow' },
        {
          name: 'google-site-verification',
          content: 'gsm0jOQFUMu6nrSQ97Tkdmz5dCo9vphTWmdZNfJRYyw',
        },
        { property: 'og:url', content: 'http://sanderfish.com' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:title',
          content: 'Sanderfish | Bootstrapper, Developer and Product Designer',
        },
        {
          property: 'og:description',
          content: `Sander Visser is a digital nomad, bootstrapper, developer and product designer. He loves to develop and design digital products, web apps and websites.`,
        },
        { property: 'og:site_name', content: 'Sanderfish' },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@fishsander' },
        { name: 'twitter:url', content: 'http://sanderfish.com' },
        { name: 'twitter:title', content: 'Sanderfish' },
        {
          name: 'twitter:description',
          content: `Sander Visser is a digital nomad, bootstrapper, developer and product designer. He loves to develop and design digital products, web apps and websites.`,
        },
      ]}
      link={[
        {
          rel: 'author',
          href: 'https://plus.google.com/101130226364973567853',
        },
        { rel: 'icon', href: favicon },
      ]}
    />
    <div
      style={{
        margin: '5% auto',
        maxWidth: 860,
        padding: '1.0875rem 1.45rem',
      }}
    >
      {children}

      <Footer>
        <FooterLink>
          <Link to="">Home</Link>
        </FooterLink>
        <FooterLink>
          <Link to="articles">Articles</Link>
        </FooterLink>
      </Footer>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
