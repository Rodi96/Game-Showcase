import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <TextField
      label="Search by Game Name"
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={onSearchChange}
      style={{ marginBottom: '20px' }}
    />
  );
};

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired
};

export default Search;

