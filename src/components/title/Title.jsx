import React from "react";
import css from './Title.module.css';

const Title = ({ title, description }) => (
  <div className={css.container}>
    <h1 className={css.title}>{title}</h1>
    <p className={css.description}>{description}</p>
  </div>
);

export default Title;
