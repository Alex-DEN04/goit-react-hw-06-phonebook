import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const contactInitialState = {
  contacts: [
    {
      name: 'Олександр Левчук',
      number: '29246351',
      id: 'lCNa0IYui62vlieMobYlU',
    },
    { name: 'Martin Holst', number: '324679', id: 'Pbn58dGzjQLy13_ztVIyQ' },
    { name: 'Erik Hansen ', number: '546980', id: 'ZPRUnu5Ww3qt6CrE6wMfZ' },
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  ],
  filter: '',
};

export const addContact = createAction('contact/addContact');
export const deleteContact = createAction('contact/deleteContact');
export const filteredContacts = createAction('filters/setStatusFilter');


const myReduser = createReducer(contactInitialState, {
  [addContact]: (state, action) => { state.contacts.unshift(action.payload) },
  [deleteContact]: (state, action) => {
    const index = state.contacts.findIndex(item => item.id === action.payload);
    state.contacts.splice(index, 1)
  },
  [filteredContacts]: (state, action) => {
    // const normolizedFilter = filtered.toLowerCase();
    // console.log(state.contacts)
    // console.log(object)
    // state.contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(action.payload.toLowerCase())
    // )
  }
})
// const addReducer = createReducer(contactInitialState, {
//   [addContact]: (state, action) => {state.contacts.unshift(action.payload)}
   
   
// });

// const deleteReducer = createReducer(contactInitialState, {
//   [deleteContact]: (state, action) => { 
//     state.contacts.filter(item => item.id !== action.payload);
//     // console.log(state);
//     console.log(action.payload);
//   },
// });

export const store = configureStore({
  reducer: {
    myValue: myReduser,
  },
});

// export const toggleCompleted = createAction("tasks/toggleCompleted");

// export const setStatusFilter = createAction('filters/setStatusFilter');
// console.log(addContact.toString())
