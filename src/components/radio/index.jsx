import React from 'react';
import style from './radio.module.scss';

const Radio = ({
  label,
  htmlFor,
  id,
  handleClick,
  name,
  handleChange,
  radioRef,
  radioValue,
  checked,
}) => {
  return (
    <div>
      <label className={style.container} htmlFor={htmlFor}>
        {label}
        <input
          type="radio"
          name={name}
          id={id}
          onClick={handleClick}
          onChange={handleChange}
          checked={checked}
          ref={radioRef}
          value={radioValue}
        />
        <span className={style.checkMark}></span>
      </label>
    </div>
  );
};

export default Radio;
