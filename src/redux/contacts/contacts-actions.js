import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    name,
    number,
    id: shortid.generate(),
  },
}));
const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

const contactsAction = { addContact, deleteContact, changeFilter };
export default contactsAction;
