import { createAction } from '@reduxjs/toolkit';

const filterByName = createAction('phonebook/filterByName');

const fetchContactsRequest = createAction('phonebook/fetchContactsRequest');
const fetchContactsSuccess = createAction('phonebook/fetchContactsSuccess');
const fetchContactsError = createAction('phonebook/fetchContactsError');

const addNewContact = createAction('phonebook/addNewContact');
const deleteContact = createAction('phonebook/deleteContact');

const phonebookActions = {
  filterByName,

  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,

  addNewContact,
  deleteContact,
};
export default phonebookActions;
