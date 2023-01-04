import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import phonebookActions from './phonebook-actions';

const filter = createReducer('', builder => {
  builder.addCase(phonebookActions.filterByName, (_, { payload }) => payload);
});

const contacts = createReducer([], builder => {
  builder
    .addCase(phonebookActions.fetchContactsSuccess, (_, { payload }) => payload)
    .addCase(phonebookActions.addNewContact, (state, { payload }) => [
      ...state,
      payload,
    ])
    .addCase(phonebookActions.deleteContact, (state, { payload }) =>
      state.filter(contact => contact.id !== payload)
    );
});

const testIsLoading = createReducer(false, builder => {
  builder.addCase(phonebookActions.fetchContactsRequest, () => true);
  builder.addCase(phonebookActions.fetchContactsSuccess, () => false);
  builder.addCase(phonebookActions.fetchContactsError, () => false);
});
const testError = createReducer(null, builder => {
  builder.addCase(
    phonebookActions.fetchContactsError,
    (_, { payload }) => payload
  );
});

const phonebookReducer = combineReducers({
  filter,
  contacts,

  testIsLoading,
  testError,
});

export default phonebookReducer;
