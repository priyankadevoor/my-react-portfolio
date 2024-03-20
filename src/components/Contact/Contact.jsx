import React from 'react';
import styles from './Contact.module.css'
import { getImageURL } from '../../utils';

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
         <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageURL("contact/emailIcon.png")} alt='Email icon'/>
                <a href='mailto:pvirupakshap@umass.edu'>pvirupakshap@umass.edu</a>
            </li >
            <li className={styles.link}>
                <img src={getImageURL("contact/linkedinIcon.png")} alt='linkedin icon'/>
                <a href='https://linkedin.com/in/priyanka-v-devoor'>linkdein.com/priyanka-v-devoor</a>
            </li>
            <li className={styles.link}>
                <img src={getImageURL("contact/githubIcon.png")} alt='github icon'/>
                <a href='https://github.com/priyankadevoor'>github.com/priyankadevoor</a>
            </li>
        </ul>
    </footer>
   
  );
}

export default Contact;
