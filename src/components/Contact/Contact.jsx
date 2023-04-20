import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice';
import { Item, Button } from './Contact.styled';

export const Contact = ({ item: {id, name, number} }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      {name}: {number}
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Item>
  );
}

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
