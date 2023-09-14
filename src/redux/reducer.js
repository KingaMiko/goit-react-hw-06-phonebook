import { combineReducers } from 'redux';

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case 'contacts/ADD':
      return [...state, action.payload];
    case 'contacts/DELETE':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'contacts/SET_FILTER':
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
