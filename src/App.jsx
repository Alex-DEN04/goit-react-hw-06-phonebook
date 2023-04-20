import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { Title } from './components/Title/Title';

export const App = () => {
  return (
    <>
      <div>
        <Title title={'Phonebook'}></Title>
        <ContactForm></ContactForm>
        <Title title={'Contacts'}></Title>
        <Filter></Filter>
        <ContactList></ContactList>
      </div>
    </>
  );
};
