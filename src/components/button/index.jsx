import React from 'react';

import style from './button.module.scss';

const Button = ({ label }) => {
  return <button className={style.button}>{label}hey</button>;
};

export default Button;
