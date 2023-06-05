import React, { forwardRef } from 'react';

import styles from './Input.module.scss';

const STRONG_PASS_REGEX =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const Input = forwardRef(
  (
    {
      name,
      value,
      label,
      onChange,
      type = 'text',
      isRequired = true,
      error,
      disabled,
      maxLength,
    },
    ref,
  ) => {
    return (
      <div className={styles.formItem}>
        <input
          id={name}
          type={type}
          className={`${styles.formInput} ${error ? styles.formInputErr : ''}`}
          required={isRequired}
          value={value}
          onChange={e => onChange(name, e.target.value)}
          ref={ref}
          disabled={disabled}
          maxLength={maxLength}
        />
        {type === 'password' && (
          <>
            <button>
              <img src="/eye-open.png" alt="show password" />
              <img src="/eye-close.png" alt="hide password" />
            </button>
            <img
              src="/mouse.png"
              alt="strong password"
              className={styles.strong}
            />
          </>
        )}
        <label htmlFor={name} className={styles.formLabel}>
          {label}
        </label>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  },
);
