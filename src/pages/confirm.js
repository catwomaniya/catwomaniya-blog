
import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const Confirm = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    return (
        <Layout location={location} title={siteTitle}>
            <main>
                <h1>Just one more thing...</h1>
                <p>
                    Thank you for subscribing. You will need to check your inbox and
                    confirm your subscription.
                </p>
            </main>
        </Layout>
    );
}

export const pageQuery = graphql`
  query ConfirmSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Confirm;