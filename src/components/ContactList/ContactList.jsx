import { Box } from 'components/Box';
import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const normolizedFilter = filter.toLowerCase();
  const filteredContacts = filter ? contacts.filter(contact =>
    contact.name.toLowerCase().includes(normolizedFilter)
  ) : contacts;

  return (
    <Box as="ul">
      {contacts &&
        filteredContacts.map(contact => (
          <Contact
            key={contact.id}
            item={contact}
          ></Contact>
        ))}
    </Box>
  );
}
