import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContacts, fetchContacts } from 'fetchContacts/fetchContacts';

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await deleteContacts(id);
    return await fetchContacts();
  }
);
