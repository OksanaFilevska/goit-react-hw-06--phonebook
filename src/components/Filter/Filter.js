import React from 'react';
import s from './Filter.module.css';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

const filterInputId = shortid.generate();

const Filter = () => {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();
  const changeFilter = e => dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <label htmlFor={filterInputId}>
      <span className={s.span}>Find contacts by name and number</span>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={changeFilter}
        id={filterInputId}
      />
    </label>
  );
};

export default Filter;
