import React, { forwardRef } from 'react';

import { Input } from '../Input/Input';

import useOutsideClick from './useOutsideClick.js';

import styles from './Select.module.scss';

export const Select = forwardRef(
  ({ options, label, onChange, error, onInputChange, inputValue }, ref) => {
    const { ref: elementRef, isActive, setIsActive } = useOutsideClick(false);

    const handleOptionClick = option => {
      onChange(option);
      setIsActive(false);
    };

    return (
      <div ref={ref}>
        <div className={styles.formItem} ref={elementRef}>
          <Input
            label={label}
            value={inputValue}
            error={error}
            onChange={onInputChange}
            onFocus={() => setIsActive(true)}
          />
          {isActive && (
            <div className={styles.options}>
              <ul>
                {options.map(option => (
                  <li className={styles.option} key={option.id}>
                    <button
                      onClick={() => handleOptionClick(option)}
                      type="button"
                    >
                      {option.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  },
);
