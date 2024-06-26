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
    <div className={styles.container} id="contact">
      <h2 className={styles.title}>Контакты</h2>
      <div className={styles.content}>
        <div className={styles.contact}>
          <img
            src={getImageUrl('contact/contactImage.png')}
            alt="Me setting with a laptop"
            className={styles.contactImage}
          />
          <div className={styles.imgLink}>
            <a href="mailto:myemail@mail.ru">
              <img
                src={getImageUrl('contact/emailIcon.png')}
                alt="Email icon"
              />
            </a>
            <a href="#">
              <img
                src={getImageUrl('contact/headhunterIcon.png')}
                alt="headhunter icon"
              />
            </a>
            <a href="https://github.com/EkaterinaToporkova">
              <img src={getImageUrl('contact/github.png')} alt="GitHub icon" />
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <h1>Свяжитесь со мной</h1>
          <div className={styles.data_block}>
            <input type="text" name="user_name" placeholder="Имя" />
            <input type="email" name="user_email" placeholder="E-mail" />
          </div>
          <div className={styles.text_area}>
            <textarea
              name="message"
              rows="10"
              placeholder="Напишите свое сообщение"
            />
          </div>
          <div className={styles.send}>
            <button type="submit">Отправить</button>
          </div>
        </form>
      </div>
    </div>
  );
};
