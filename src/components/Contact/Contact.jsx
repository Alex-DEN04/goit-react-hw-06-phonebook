import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contactsSlice';
import { Item, Button } from './Contact.styled';

export default function Contact({ item }) {
  const dispatch = useDispatch();

  return (
    <Item>
      {item.name}: {item.number}
      <Button type="button" onClick={() => dispatch(deleteContact(item.id))}>
        Delete
      </Button>
    </Item>
  );
}

Contact.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
};
