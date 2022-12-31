import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { filteredContacts } from 'redux/contactsSlice';
import { Label, Input } from './Filter.styled';

export default function Filter({ value, onChange }) {
  const dispatch = useDispatch()
  // const contacts = useSelector(state => state.myValue)
  const handleChange = event => {
    console.log(event.target.value);
    // contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(event.target.value.toLowerCase())
    // );
  
    dispatch(filteredContacts(event.target.value))
  }

  return (
    <Box ml={5} gap={3}>
      <Label htmlFor="">Find contacts by name</Label>
      <Input type="text" value={value} onChange={handleChange} />
    </Box>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
