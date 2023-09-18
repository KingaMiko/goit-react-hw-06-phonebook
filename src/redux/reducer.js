import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const initialState = [];
const initalFilterState = '';

export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

export const filterReducer = createReducer(initalFilterState, {
  [setFilter]: (state, action) => action.payload,
});
