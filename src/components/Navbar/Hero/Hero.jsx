import React, { useState } from 'react';
import { getImageUrl } from '../../../utils';

export const Hero = () => {
  return (
    <section>
      {/* div - Весь текст левой части*/}
      <div>
        <h1>Привет! Меня зовут Катя Топоркова</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="mailto:myemail@mail.ru">Связаться</a>
        {/* Нажавший на эту ссылку попадет на свою почту и сможет отправить мне письмо*/}
      </div>
      <img src={getImageUrl('hero / heroImage.jpg')} alt="hero image of me" />
    </section>
  );
};
