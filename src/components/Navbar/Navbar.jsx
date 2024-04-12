import React, { useState } from 'react';

import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <a href="#">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/home.png"
                alt="home"
              />
            </a>
          </li>
          <li>
            <a href="#about">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/person-female--v1.png"
                alt="person-female--v1"
              />
            </a>
          </li>
          <li>
            <a href="#experience">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/FFFFFF/parse-resumes.png"
                alt="parse-resumes"
              />
            </a>
          </li>
          <li>
            <a href="#projects">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/hatch/64/FFFFFF/merge-git.png"
                alt="merge-git"
              />
            </a>
          </li>
          <li>
            <a href="#contact">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/glyph-neue/64/FFFFFF/contacts.png"
                alt="contacts"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
