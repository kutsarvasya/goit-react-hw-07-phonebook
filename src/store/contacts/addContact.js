import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts, fetchContacts } from 'fetchContacts/fetchContacts';

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async data => {
    await addContacts(data);
    return await fetchContacts();
  }
);
