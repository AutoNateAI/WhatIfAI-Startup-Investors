import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI-Powered Decision Making',
    description: (
      <>
        Make confident decisions backed by advanced AI analysis. Our tools process complex scenarios 
        and provide clear, actionable recommendations.
      </>
    ),
  },
  {
    title: 'Real-Time Market Intelligence',
    description: (
      <>
        Stay ahead of market trends with real-time AI analysis of market conditions, competitor moves, 
        and emerging opportunities.
      </>
    ),
  },
  {
    title: 'Enterprise-Grade Security',
    description: (
      <>
        Your data security is our priority. Benefit from enterprise-level encryption and privacy 
        controls while accessing powerful AI capabilities.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
