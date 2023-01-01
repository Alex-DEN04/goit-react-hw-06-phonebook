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
      // const normolizedFilter = filtered.toLowerCase();
      // console.log(state.contacts)
      // console.log(object)
      // state.filterValue = action.payload;
      
      state.contacts.filter(contact => {
          console.log(contact)
          const name = contact.name.toLowerCase();
          const payload = action.payload.toLowerCase();
              const result = name.includes(payload);
              console.log(result)
              return state.filter = result;
      })
        if (!state.filter) {
          return state.contacts
        }
        
    },
  },
});

export const { addContact, deleteContact, filteredContacts } =
  contactsSlice.actions;
export const myReduser = contactsSlice.reducer;
