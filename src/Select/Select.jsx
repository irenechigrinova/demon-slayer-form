import React, { forwardRef, useState } from 'react';

import { Input } from '../Input/Input';

import styles from './Select.module.scss';

export const Select = forwardRef(
  (
    {
      name,
      value,
      options,
      label,
      onChange,
      error,
      disabled,
      onInputChange,
      inputValue,
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className={styles.formItem}>
        <Input
          label={label}
          value={inputValue}
          error={error}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 1000)}
          onChange={onInputChange}
        />
        {isFocused && (
          <div className={styles.options}>
            <ul>
              {options.map(option => (
                <li className={styles.option} key={option.id}>
                  <button onClick={() => onChange(option)} type="button">
                    {option.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
);
