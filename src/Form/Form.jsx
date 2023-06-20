import { useReducer, useEffect, useState, useRef } from 'react';

import { Input } from '../Input/Input';
import { Select } from '../Select/Select';

import styles from './Form.module.scss';

import { formReducer, INITIAL_STATE, ACTIONS } from './Form.reducer.js';
import { validate, calcPercentage } from './Form.utils.js';

export const Form = ({ onFocus, onBlur, setPercentage }) => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const [countries, setCountries] = useState([]);
  const [selectInput, setSelectInput] = useState('');

  const timer = useRef();

  const fetchData = async () => {
    const response = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,area',
    );
    const result = await response.json();
    setCountries(
      result.map(item => ({
        id: item.area + Math.random(),
        name: item.name.common,
      })),
    );
  };

  const fetchFilteredData = async query => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${query}?fields=name,area`,
      );
      const result = await response.json();
      setCountries(
        result.map(item => ({
          id: item.area + Math.random(),
          name: item.name.common,
        })),
      );
    } catch {
      setCountries([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setPercentage(calcPercentage(state.values));
  }, [state.values]);

  const handleChange = (name, value) => {
    dispatch({ type: name, payload: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validate(state.values);
    if (Object.keys(errors).length) {
      dispatch({ type: ACTIONS.setError, payload: errors });
    } else {
      alert('ok');
    }
  };

  const handleSelectInputChange = (_, value) => {
    setSelectInput(value);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      fetchFilteredData(value);
    }, 400);
  };

  const handleCountryChange = option => {
    dispatch({ type: ACTIONS.changeCountry, payload: option.name });
    setSelectInput(option.name);
  };

  return (
    <form
      className={styles.form}
      onFocus={onFocus}
      onBlur={onBlur}
      onSubmit={handleSubmit}
    >
      <Input
        name={ACTIONS.changeName}
        value={state.values.name}
        onChange={handleChange}
        label="Your name"
        error={state.errors.name}
      />
      <Input
        name={ACTIONS.changePass}
        value={state.values.password}
        onChange={handleChange}
        label="Your password"
        type="password"
        error={state.errors.password}
      />
      <Input
        name={ACTIONS.changeConfirmPass}
        value={state.values.confirmPassword}
        onChange={handleChange}
        label="Confirm password"
        type="password"
        error={state.errors.confirmPassword}
      />
      <Input
        label="Your age"
        name={ACTIONS.changeAge}
        value={state.values.age || ''}
        onChange={handleChange}
        error={state.errors.age}
      />
      <Select
        label="Your country"
        options={countries}
        inputValue={selectInput}
        onInputChange={handleSelectInputChange}
        onChange={handleCountryChange}
      />
      <button type="submit">
        <img src="/button.jpg" alt="submit" />
      </button>
    </form>
  );
};
