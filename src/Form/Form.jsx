import { Input } from '../Input/Input';
import { Select } from '../Select/Select';

import styles from './Form.module.scss';

export const Form = ({ onFocus, onBlur }) => {
  return (
    <form className={styles.form} onFocus={onFocus} onBlur={onBlur}>
      <Input label="Your name" />
      <Input label="Your password" type="password" />
      <Input label="Confirm password" type="password" />
      <Input label="Your age" />
      <Select label="Your country" options={[]} />
      <button type="submit">
        <img src="/button.jpg" alt="submit" />
      </button>
    </form>
  );
};
