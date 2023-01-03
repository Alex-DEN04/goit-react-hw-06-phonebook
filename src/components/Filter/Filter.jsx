import { Box } from 'components/Box';
import { useDispatch } from 'react-redux';

import { filteredContacts } from 'redux/contactsSlice';
import { Label, Input } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <Box ml={5} gap={3}>
      <Label htmlFor="">Find contacts by name</Label>
      <Input
        type="text"
        onChange={e => dispatch(filteredContacts(e.target.value))}
      />
    </Box>
  );
}
