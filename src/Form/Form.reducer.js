export const INITIAL_STATE = {
  values: {
    name: '',
    password: '',
    confirmPassword: '',
    age: null,
    country: '',
  },
  errors: {
    name: '',
    password: '',
    confirmPassword: '',
    age: '',
    country: '',
  },
};

export const ACTIONS = {
  changeName: 'changeName',
  changePass: 'changePass',
  changeConfirmPass: 'changeConfirmPass',
  changeAge: 'changeAge',
  changeCountry: 'changeCountry',
  setError: 'setError',
};

export const formReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.changeName:
      return {
        ...state,
        values: { ...state.values, name: payload },
        errors: { ...state.errors, name: '' },
      };
    case ACTIONS.changePass:
      return {
        ...state,
        values: { ...state.values, password: payload },
        errors: { ...state.errors, password: '' },
      };
    case ACTIONS.changeConfirmPass:
      return {
        ...state,
        values: { ...state.values, confirmPassword: payload },
        errors: { ...state.errors, confirmPassword: '' },
      };
    case ACTIONS.changeCountry:
      return {
        ...state,
        values: { ...state.values, country: payload },
        errors: { ...state.errors, country: '' },
      };
    case ACTIONS.changeAge: {
      const value = Number(payload.replace(/\D/g, ''));
      return {
        ...state,
        values: { ...state.values, age: value },
        errors: { ...state.errors, age: '' },
      };
    }
    case ACTIONS.setError:
      return {
        ...state,
        errors: { ...state.errors, ...payload },
      };
    default:
      throw new Error(`type ${type} is not supported`);
  }
};
