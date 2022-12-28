import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';

export default function ContactList () {
  const contacts = useSelector(state => state.myValue);
  console.log(contacts);
  return (
    <Box as="ul">
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          item={contact}
          // onDeleteContact={onDeleteContact}
        ></Contact>
      ))}
    </Box>
  );
}

ContactList.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
  onDeleteContact: PropTypes.func,
};
