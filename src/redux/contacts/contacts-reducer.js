import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';

const contactsLocale = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(contactsLocale);
const initialContacts = parsedContacts ? parsedContacts : [];
const add = (state, { payload }) => {
  if (state.some(contact => contact.name.includes(payload.name))) {
    alert(`${payload.name} is already in contacts!`);
    return state;
  }

  const addContacts = [...state, payload];
  window.localStorage.setItem('contacts', JSON.stringify(addContacts));
  return addContacts;
};

const delet = (state, { payload }) => {
  const deleteContacts = [...state.filter(contact => contact.id !== payload)];
  window.localStorage.setItem('contacts', JSON.stringify(deleteContacts));
  return deleteContacts;
};

const items = createReducer(initialContacts, {
  [contactsActions.addContact]: add,
  [contactsActions.deleteContact]: delet,
});
const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
