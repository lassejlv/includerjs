import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    description: <>Includer.js is very is to use, just one HTML tag.</>,
  },

  {
    title: "No Download",
    description: (
      <>
        No download is required to use Includer.js, just grab the CDN and you
        are good to go!
      </>
    ),
  },

  {
    title: "Build with ❤",
    description: (
      <>
        Includer.js is build to make developers HTML code much better to write.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
