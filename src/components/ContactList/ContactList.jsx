import { Box } from 'components/Box';
import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filtered = useSelector(state => state.filter);
  const normolizedFilter = filtered.toLowerCase();
  const filteredContacts = filtered ? contacts.filter(contact =>
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
