import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { myReduser } from './contactsSlice';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['contacts']
};

// const contactInitialState = {
//   contacts: [],
//   filter: '',
// };

// export const addContact = createAction('contact/addContact');
// export const deleteContact = createAction('contact/deleteContact');
// export const filteredContacts = createAction('contact/filteredContacts');

// const myReduser = createReducer(contactInitialState, {
//   [addContact]: (state, action) => {
//     state.contacts.unshift(action.payload);
//   },
//   [deleteContact]: (state, action) => {
//     const index = state.contacts.findIndex(item => item.id === action.payload);
//     state.contacts.splice(index, 1);
//   },
//   [filteredContacts]: (state, action) => {
//     // const normolizedFilter = filtered.toLowerCase();
//     // console.log(state.contacts)
//     // console.log(object)
//     // state.filterValue = action.payload;
//     state.contacts.filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase()))
//   },
// });
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

const persistedReducer = persistReducer(persistConfig, myReduser);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// export const toggleCompleted = createAction("tasks/toggleCompleted");

// export const setStatusFilter = createAction('filters/setStatusFilter');
// console.log(addContact.toString())
