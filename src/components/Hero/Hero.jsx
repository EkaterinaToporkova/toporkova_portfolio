import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

//тут div - Весь текст левой части
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Привет! Меня зовут <span>Катя Топоркова</span>
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="mailto:myemail@mail.ru" className={styles.contactBtn}>
          Связаться
        </a>
        {/* Нажавший на эту ссылку попадет на свою почту и сможет отправить мне письмо*/}
      </div>
      <img
        src={getImageUrl('hero/heroImage.png')}
        alt="hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
