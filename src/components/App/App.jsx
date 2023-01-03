import { ContactForm } from '../Phonebook/Phonebook';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Title from '../Title/Title';

export default function App() {
  return (
    <>
      <div>
        <Title title={'Phonebook'}></Title>
        <ContactForm></ContactForm>
        <Title title={'Contacts'}></Title>
        <Filter></Filter>
        <ContactList
        ></ContactList>
      </div>
    </>
  );
}
