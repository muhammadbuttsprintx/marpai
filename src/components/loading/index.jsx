import React from 'react';
import style from './loading.module.scss';

const Loading = () => {
  return (
    <>
      <span className={style.spinner}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>
    </>
  );
};

export default Loading;
