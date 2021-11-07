import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import contactsActions from '../../redux/contacts/contacts-actions';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizedFilter) || contact.number.includes(filter),
  );
};

const ContactList = () => {
  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getVisibleContacts(items, filter),
  );
  const dispatch = useDispatch();
  return (
    <ul className="s.list">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className="s.contacts">
            {name}: <span>{number}</span>
          </p>
          <button
            type="button"
            className={s.btnList}
            onClick={() => dispatch(contactsActions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


export default ContactList;
