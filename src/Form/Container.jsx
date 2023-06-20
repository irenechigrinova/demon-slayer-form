import { useState } from 'react';
import styles from './Form.module.scss';

import { Form } from './Form';

export const Container = props => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    if (!isFocused) setIsFocused(true);
  };

  const handleBlur = () => {
    if (isFocused) setIsFocused(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.nezuko}>
        <img src="/nezuko-2.png" alt="Nezuko" className={styles.hands} />
        <img
          src="/nezuko-1.png"
          alt="Nezuko"
          className={`${styles.face} ${isFocused ? styles.show : styles.hide}`}
        />
      </div>
      <Form
        onFocus={handleFocus}
        onBlur={handleBlur}
        setPercentage={props.setPercentage}
      />
      {/* <div className={styles.loading}> */}
      {/*  <img src="/loading.gif" alt="loading" /> */}
      {/* </div> */}
    </div>
  );
};
