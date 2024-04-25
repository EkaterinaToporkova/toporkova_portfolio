import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Frontend</h2>
        <p>Developer</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="#">Главная</a>
        </li>
        <li className={styles.link}>
          <a href="#about">Обо мне</a>
        </li>
        <li className={styles.link}>
          <a href="#experience">Опыт работы</a>
        </li>
        <li className={styles.link}>
          <a href="#projects">Проекты</a>
        </li>
        <li className={styles.link}>
          <a href="#contact">Контакты</a>
        </li>
      </ul>
    </footer>
  );
};
