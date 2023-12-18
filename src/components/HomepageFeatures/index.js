import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        The MultiRS Flood Mapper is designed for both remote sensing experts and laypersons.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/target.svg').default,
    description: (
      <>
        The MultiRS Flood Mapper lets you focus on the core of your tasks and analysis, and we'll do the chores.
      </>
    ),
  },
  {
    title: 'Powered by Google Earth Engine',
    Svg: require('@site/static/img/cloud.svg').default,
    description: (
      <>
        The MultiRS Flood Mapper runs entirely on the cloud. You don't need a fancy computer to be able use it!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
