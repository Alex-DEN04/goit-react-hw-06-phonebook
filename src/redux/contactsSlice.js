import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'root',
  initialState: contactInitialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.unshift(action.payload);
    },
    deleteContact: (state, action) => {
      const index = state.contacts.findIndex(
        item => item.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    filteredContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filteredContacts } =
  contactsSlice.actions;
export const myReduser = contactsSlice.reducer;
