import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../../../key';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
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
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <label>Имя</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Сообщение</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </footer>
  );
};
