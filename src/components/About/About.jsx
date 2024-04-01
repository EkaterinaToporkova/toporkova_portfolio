import React from 'react';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

//тут div - Весь текст левой части
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Обо мне</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl('about/aboutImage.png')}
          alt="Me setting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl('about/cursorIcon.png')}
              alt="Cursor icon"
              className={styles.cursorIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Я фронтенд разработчик с опытом создания адаптивных и
                оптимизированнхы сайтов
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl('about/serverIcon.png')}
              alt="Server icon"
              className={styles.serverIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer Designer</h3>
              <p>Есть опыт работы разработки на Django 4.2</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl('about/designerIcon.png')}
              alt="Designer icon"
              className={styles.designerIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>Designer</h3>
              <p>Разработала макеты пользовательских интерфейсов в Figma</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
