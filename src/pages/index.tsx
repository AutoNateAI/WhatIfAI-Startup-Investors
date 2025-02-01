import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          What If AI Could Grow Your VC Portfolio?
        </Heading>
        <p className="hero__subtitle">
          AI-powered scenario analysis to identify winning investments and optimize returns
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="WhatIfAI - AI-Powered Business Scenarios"
      description="Explore the potential of AI in your business with WhatIfAI's powerful scenario analysis tools">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--4">
              <div className="text--center padding-horiz--md">
                <h2>Scenario Planning</h2>
                <p>
                  Test business decisions with AI-powered scenario analysis. Understand potential outcomes before making critical choices.
                </p>
              </div>
            </div>
            <div className="col col--4">
              <div className="text--center padding-horiz--md">
                <h2>Risk Assessment</h2>
                <p>
                  Identify potential risks and opportunities in your business strategies using advanced AI algorithms.
                </p>
              </div>
            </div>
            <div className="col col--4">
              <div className="text--center padding-horiz--md">
                <h2>Data-Driven Insights</h2>
                <p>
                  Transform complex data into actionable insights with our AI tools designed for business leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
