import React, { forwardRef, useEffect, useMemo, useState } from 'react';

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
      onFocus,
      onBlur,
    },
    ref,
  ) => {
    const [isShownPass, setIsShownPass] = useState(false);
    const [isPassStrong, setIsPassStrong] = useState(false);

    const inputType = useMemo(() => {
      if (type !== 'password') return type;
      return isShownPass ? 'text' : 'password';
    }, [type, isShownPass]);

    useEffect(() => {
      if (
        value &&
        typeof value === 'string' &&
        value.match(STRONG_PASS_REGEX)
      ) {
        setIsPassStrong(true);
      } else {
        setIsPassStrong(false);
      }
    }, [value]);

    const handleShowPassToggle = () => {
      setIsShownPass(prevState => !prevState);
    };

    return (
      <div className={styles.formItem}>
        <input
          id={name}
          type={inputType}
          className={`${styles.formInput} ${error ? styles.formInputErr : ''}`}
          required={isRequired}
          value={value}
          onChange={e => onChange(name, e.target.value)}
          ref={ref}
          disabled={disabled}
          maxLength={maxLength}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {type === 'password' && (
          <>
            <button onClick={handleShowPassToggle} type="button">
              {!isShownPass && <img src="/eye-open.png" alt="show password" />}
              {isShownPass && <img src="/eye-close.png" alt="hide password" />}
            </button>
            {isPassStrong && (
              <img
                src="/mouse.png"
                alt="strong password"
                className={styles.strong}
              />
            )}
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
