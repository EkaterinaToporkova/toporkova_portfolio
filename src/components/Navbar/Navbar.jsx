import React, { useState } from 'react';

import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      {/* возврат на домашнюю страницу */}
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={getImageUrl('nav/menuIcon.png')}
          alt="menu-button"
        />
        <ul className={styles.menuItems}>
          <li>
            <a href="#about">Обо мне</a>
          </li>
          <li>
            <a href="#experience">Опыт работы</a>
          </li>
          <li>
            <a href="#projects">Проекты</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
