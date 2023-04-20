import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'root',
  initialState: contactInitialState,
  reducers: {
    addContact: (state, action) => {
      state.items.unshift(action.payload);
    },
    deleteContact: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
    },
    filteredContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filteredContacts } =
  contactsSlice.actions;
export const myReduser = contactsSlice.reducer;
