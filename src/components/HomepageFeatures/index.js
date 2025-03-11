import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Free Things to Do in',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Travelers can have exciting days in any city without spending a single penny. 
        So, Your readers will enjoy the article sharing the best free activities around a specific site.
      </>
    ),
  },
  {
    title: 'Comparing Cities',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        There are a few ways to compare cities. 
        You can do it by population, size, diversity, culture, history, climate, and geography.
      </>
    ),
  },
  {
    title: 'The Cheapest Route to',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       We all know that feeling of dread when we open our wallets, 
       and see how little money is left after paying for necessities like food and shelter. 
       But what if you told your audience there are ways to travel on a tight budget?
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
