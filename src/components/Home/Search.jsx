import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <Paper
      component="form"
      elevation={3}
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '20px',
        padding: '2px 4px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
        flex: 1
      }}
    >
      <InputBase
        placeholder="Search Games"
        fullWidth
        value={searchTerm}
        onChange={onSearchChange}
        sx={{ ml: 1, flex: 1 }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;


Search.propTypes = {
 searchTerm: PropTypes.string.isRequired,
 onSearchChange: PropTypes.func.isRequired
 };
