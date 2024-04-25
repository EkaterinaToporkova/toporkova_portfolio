import React from 'react';

import skill from '../../data/skill.json';
import history from '../../data/history.json';
import styles from './Experience.module.css';
import { getImageUrl } from '../../utils';

export const Experience = () => {
  //  id="experience" - в данном случае для того, чтобы перейти к блоку
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Опыт работы</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skill.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                {/* <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                /> */}
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
