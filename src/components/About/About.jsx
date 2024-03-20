import React from 'react';
import { getImageURL } from '../../utils';
import styles from './About.module.css';

const About = () => {
  return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>ABOUT</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageURL('about/aboutImage.png')} alt = "about-image"/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageURL('about/cursorIcon.png')} alt = "cursor-image"/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I’m a front-end developer with expertise in building responsive websites using HTML, CSS, and JavaScript frameworks like React.js</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageURL('about/serverIcon.png')} alt = "server-image"/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Engineer</h3>
                            <p>I have expertise in building high-performance and scalable back-end systems and APIs</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img src={getImageURL('about/uiIcon.png')} alt = "ui-image"/>
                        <div className={styles.aboutItemText}>
                            <h3>Automation Scripting</h3>
                            <p>Skilled in developing and implementing automation scripts using Python to streamline repetitive tasks and improve development efficiency</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
  );
}

export default About;
