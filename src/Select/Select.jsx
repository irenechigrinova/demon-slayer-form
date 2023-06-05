import React, { forwardRef } from 'react';

import { Input } from '../Input/Input';

import styles from './Select.module.scss';

export const Select = forwardRef(
  ({ name, value, options, label, onChange, error, disabled }, ref) => {
    return (
      <div className={styles.formItem}>
        <Input label={label} value={value ?? ''} error={error} />
        <div className={styles.options}>
          <ul>
            {options.map(option => (
              <li className={styles.option} key={option.id}>
                <button>{option.name}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  },
);
