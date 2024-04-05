import React from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon" />
          <a href="mailto:myemail@mail.ru">myemail@mail.ru</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl('contact/headhunterIcon.png')}
            alt="headhunter icon"
          />
          <a href="#">headhunter.com/EkaterinaToporkova</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/github.png')} alt="GitHub icon" />
          <a href="https://github.com/EkaterinaToporkova">
            github.com/EkaterinaToporkova
          </a>
        </li>
      </ul>
    </footer>
  );
};
