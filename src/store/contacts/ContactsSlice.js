import { createSlice } from '@reduxjs/toolkit';
// import { initialPhoneBook } from 'components/data/data';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    remove: (state, { payload }) => {
      state.items = state.items.filter(el => el.id !== payload);
    },
    addContact: (state, { payload }) => {
      return {
        ...state,
        items: [...state.items, payload],
      };
    },
    changeFilter: (state, { payload }) => {
      return {
        ...state,
        filter: payload,
      };
    },
  },
});

export default contactsSlice.reducer;

export const { actions } = contactsSlice;
