import React from 'react';
import style from './input.module.scss';

const Input = ({
  label,
  containerClass,
  inputClass,
  name,
  value,
  onChange,
  type,
  onClick,
  placeholder,
  readOnly,
  inputRef,
  ...restOfProps
}) => {
  return (
    <>
      <div className={`${style.inputContainer} ${containerClass}`}>
        {label && <label>{label}</label>}
        <div style={{ position: 'relative' }}>
          <input
            className={inputClass}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            ref={inputRef}
            readOnly={readOnly || false}
            {...restOfProps}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
