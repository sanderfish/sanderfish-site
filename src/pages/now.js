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
        I'm also working on{' '}
        <a href="https://essentialcal.com" target="blank">
          Essential
        </a>
        , which is a weekly planner my friend{' '}
        <a href="http://stay-bold.com" target="blank">
          Joris de Ruiter
        </a>{' '}
        and I made to help us focus better.
      </p>
      <p>
        I'm currently working freelance for{' '}
        <a href="https://bijlesmatch.nl" target="blank">
          BijlesMatch
        </a>
        , where I'm maintaining and adding features to their customer portal and
        admin dashboard.
      </p>
    </div>
  </Layout>
);

export default NowPage;
