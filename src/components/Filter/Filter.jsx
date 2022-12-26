import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {filteredContacts} from '../../redux/store'
import { Label, Input } from './Filter.styled';

export default function Filter({ value, onChange }) {
  const dispatch = useDispatch()
  return (
    <Box ml={5} gap={3}>
      <Label htmlFor="">Find contacts by name</Label>
      <Input type="text" value={value} onChange={() => dispatch(filteredContacts(value))} />
    </Box>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
