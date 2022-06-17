import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        79 / 565
      </>
    ),
  },
  {
    title: 'Medium',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        32 / 1197
      </>
    ),
  },
  {
    title: 'Hard',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        2 / 484
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
  const recentPosts = require("../../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");
  const recentPosts1 = require("../../../.docusaurus/docusaurus-plugin-content-blog/default/blog-archive-80c.json");

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('col col--4')}>
        
        <div className="text--center">
          <h3>Recent Posts</h3>    
        </div>
          <div className='text--center padding-horiz--md'>
          {recentPosts.items.slice(0, 5).map((item, index) => (
            <li key={index}>
              <a href={`${item.permalink}`}>{item.title}</a>{" "}
              <a href={item.permalink + ".html"}>{item.title}</a>{" "}
            </li>
          ))}
            {recentPosts1.blogPosts.slice(0, 5).map((item, index) => (
            <li key={index}>
              <a href={`${item.metadata.permalink}`}>{item.metadata.title}</a>{" "}
              <a href={item.metadata.permalink + ".html"}>{item.metadata.title}</a>{" "}
            </li>
          ))}
          </div>   
        </div>
      </div>
    </section>
  );
}
