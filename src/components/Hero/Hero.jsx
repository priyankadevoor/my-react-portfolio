import React from 'react';
import { getImageURL } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Priyanka!</h1>
            <p className={styles.description}>I'm a full-stack developer with expertise in building web applications using Python (Django, Flask) and React.js. Proficient in API integration and automation scripting, ensuring seamless communication and efficient development processes.</p>
            <a href='mailto:pvirupakshap@umass.edu' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageURL("hero/heroImage.png")} alt='My Hero Image' className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  );
}

export default Hero;
