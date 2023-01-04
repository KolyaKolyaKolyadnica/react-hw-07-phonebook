import phonebookActions from './phonebook-actions';

export const getContacts = () => async dispatch => {
  dispatch(phonebookActions.fetchContactsRequest());

  try {
    const response = await fetch(
      'https://63b432e99f50390584a9cbcd.mockapi.io/contacts'
    );
    const contacts = await response.json();

    dispatch(phonebookActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(phonebookActions.fetchContactsError(error.message));
  }
};

export const postContact = text => async dispatch => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(text),
  };

  const response = await fetch(
    'https://63b432e99f50390584a9cbcd.mockapi.io/contacts',
    options
  );
  const contact = await response.json();

  dispatch(phonebookActions.addNewContact(contact));
};

export const deleteContact = contactId => {
  return async function (dispatch) {
    const options = {
      method: 'DELETE',
    };

    await fetch(
      `https://63b432e99f50390584a9cbcd.mockapi.io/contacts/${contactId}`,
      options
    );

    dispatch(phonebookActions.deleteContact(contactId));
  };
};
