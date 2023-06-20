export const validate = data => {
  const errors = {};
  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Please, enter correct password';
  }
  if (data.age < 21 || data.age > 100) {
    errors.age = 'Please, enter correct age';
  }
  return errors;
};

export const calcPercentage = values => {
  return Object.keys(values).reduce(
    (acc, key) => (values[key] ? acc + 20 : acc),
    0,
  );
};
