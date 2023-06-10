import { createSlice } from '@reduxjs/toolkit';
import { getContactsThunk } from './getContactsThunk';
import { deleteContactsThunk } from './deleteContact';
import { addContactsThunk } from './addContact';

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = payload;
  state.contacts.error = '';
};
const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: { items: [], isLoading: false, error: null },
    filter: '',
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      return {
        ...state,
        filter: payload,
      };
    },
  },

  extraReducers: builder => {
    builder
      // .addMatcher(
      //   isAnyOf([
      //     getContactsThunk.pending,
      //     deleteContactsThunk.pending,
      //     addContactsThunk.pending,
      //   ]),
      //   handlePending
      // )
      // .addMatcher(
      //   isAnyOf([
      //     getContactsThunk.pending,
      //     deleteContactsThunk.pending,
      //     addContactsThunk.pending,
      //   ]),
      //   handleFulfilled
      // )
      // .addMatcher(
      //   isAnyOf([
      //     getContactsThunk.pending,
      //     deleteContactsThunk.pending,
      //     addContactsThunk.pending,
      //   ]),
      //   handleRejected
      // );
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilled)
      .addCase(deleteContactsThunk.rejected, handleRejected)
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.fulfilled, handleFulfilled)
      .addCase(addContactsThunk.rejected, handleRejected);
  },
});

export default contactsSlice.reducer;

export const { actions } = contactsSlice;
