import { createSlice } from "@reduxjs/toolkit";

const contactInitialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactInitialState,
  reducers: {
        addContact: (state, action) => {
        state.contacts.unshift(action.payload);
    },
        deleteContact: (state, action) => {
        const index = state.contacts.findIndex(item => item.id === action.payload);
        state.contacts.splice(index, 1);
    },
        filteredContacts: (state, action) => {
        // const normolizedFilter = filtered.toLowerCase();
        // console.log(state.contacts)
        // console.log(object)
        // state.filterValue = action.payload;
        state.contacts.filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase()))
    },
  },
});

export const { addContact, deleteContact, filteredContacts } = contactsSlice.actions;
export const myReduser = contactsSlice.reducer;