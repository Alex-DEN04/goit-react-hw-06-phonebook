import { Box } from 'components/Box';
import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';

export default function ContactList() {
  const items = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getFilterContacts = () => {
    if (!filter) {
      return items;
    }
    const filteredContacts = items.filter(item => {
      const normolizedFilter = filter.toLowerCase();
      const normalizedName = item.name.toLowerCase();
      const result = normalizedName.includes(normolizedFilter);
      return result;
    });
    return filteredContacts;
  };
  const contacts = getFilterContacts();

  return (
    <Box as="ul">
      {items &&
        contacts.map(contact => (
          <Contact key={contact.id} item={contact}></Contact>
        ))}
    </Box>
  );
}
