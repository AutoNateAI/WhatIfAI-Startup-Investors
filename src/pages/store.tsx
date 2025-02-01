import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Store(): JSX.Element {
  return (
    <Layout
      title="Store"
      description="WhatIfAI Store - Get access to our AI tools">
      <header className="hero hero--primary">
        <div className="container">
          <Heading as="h1" className="hero__title">
            WhatIfAI Store
          </Heading>
          <p className="hero__subtitle">
            Get access to our powerful AI tools
          </p>
        </div>
      </header>
      <main className="container margin-vert--lg">
        {/* Store content will go here */}
        <div className="row">
          <div className="col">
            <p>Store content coming soon...</p>
          </div>
        </div>
      </main>
    </Layout>
  );
} 