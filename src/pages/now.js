import React from 'react';
import Link from 'gatsby-link';

import Layout from '../components/Layout';

const NowPage = ({ location }) => (
  <Layout location={location}>
    <h1>NOW</h1>
    <div className="pv2">
      <p>
        Right now, I'm working on{' '}
        <a href="https://checkoutpage.co" target="blank">
          Checkout Page
        </a>
        , a service that helps small and medium businesses sell their products
        and services online. If you're looking for an easy way to sell your
        (digital) product, validate your idea or take payments for your app, let
        me know!
      </p>
      <p>
        I'm also setting up a creative development agency with{' '}
        <a href="https://flowen.me" target="_blank">
          Lowen
        </a>
        . We will help companies in the creative industry make web experiences
        and software for humans. I'm excited to dive more into a niche and a new
        industry. Creative programming is stil quite new to me but offers a
        whole new set of challenges (and maths!).
      </p>
      <p>
        In the meantime I'm still working freelance, ranging from web
        applications to marketing sites and technical SEO. Feel free to reach
        out if you need any help in React, Node or front-end development.
      </p>
      <p>
        On a more personal note, I have finally traveled out of Europe and am
        currently in Thailand. Life is quite different on this side of the
        globe.
      </p>
    </div>
  </Layout>
);

export default NowPage;
