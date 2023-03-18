import { Box } from 'components/Box';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import Contact from '../Contact/Contact';

export default function ContactList() {
  const items = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const getFilterContacts = () => {
    if (!filterValue) {
      return items;
    }
    const filteredContacts = items.filter(item => {
      const normolizedFilter = filterValue.toLowerCase();
      const normalizedName = item.name.toLowerCase();
      const result = normalizedName.includes(normolizedFilter);
      return result;
    });
    return filteredContacts;
  };
  const contacts = getFilterContacts();

  return (
    <Box as="ul">
      {contacts &&
        contacts.map(contact => (
          <Contact key={contact.id} item={contact}></Contact>
        ))}
    </Box>
  );
}