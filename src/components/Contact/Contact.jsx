import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../../../key.env';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          console.log('Сообения отправлено успешно!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.conact}>
        <div className={styles.text}>
          <h2>Контакты</h2>
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
      </div>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <label>Имя</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Сообщение</label>
        <textarea name="message" />
        <input type="submit" value="Сязаться" />
      </form>
    </footer>
  );
};
