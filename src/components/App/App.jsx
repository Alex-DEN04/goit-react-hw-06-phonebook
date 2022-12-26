// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

// import useLocalStorage from 'components/Hooks/Hooks';
import { ContactForm } from '../Phonebook/Phonebook';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Title from '../Title/Title';
// import { addContact } from 'redux/store';

export default function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filtered, setFilter] = useState('');

  // const dispatch = useDispatch();

  // const dispatch = useDispatch((data) => {
  //   for (const contact of contacts) {
  //     if (contact.name.toLowerCase() === data.name.toLowerCase()) {
  //       return alert(`${data.name} is already in contacts`);
  //     }
  //   }
  //   setContacts([data, ...contacts]);
  // });

  // const removeContact = event => {
  //   setContacts(contacts.filter(contact => contact.id !== event));
  // };

  // const formSubmitHandler = data => {
  //   for (const contact of contacts) {
  //     if (contact.name.toLowerCase() === data.name.toLowerCase()) {
  //       return alert(`${data.name} is already in contacts`);
  //     }
  //   }
  //   // setContacts([data, ...contacts]);
  // };

  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const normolizedFilter = filtered.toLowerCase();
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normolizedFilter)
  // );

  return (
    <>
      <div>
        <Title title={'Phonebook'}></Title>
        <ContactForm></ContactForm>
        {/* <ContactForm onFormSubmitHandler={() => dispatch(addContact())}></ContactForm> */}
        <Title title={'Contacts'}></Title>
        <Filter ></Filter>
        <ContactList
          // items={filteredContacts}
          // onDeleteContact={removeContact}
        ></ContactList>
      </div>
    </>
  );
}
