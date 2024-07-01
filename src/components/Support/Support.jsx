import { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';

export const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Support request submitted:', { name, email, message });
    setSubmitted(true);
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          padding: '20px',
          marginTop: '230px',
          marginBottom: '30px',
          backgroundColor: 'black',
          borderRadius: '10px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center items horizontally
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Roboto', color: 'white' }}>
          Contact us below for any issues you may have!
        </Typography>
        {submitted ? (
          <Typography variant="h6" component="p" sx={{ fontFamily: 'Roboto', color: 'white' }}>
            Thank you for contacting support. We will get back to you shortly.
          </Typography>
        ) : (
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Box mb={2} style={{ width: '100%' }}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                InputProps={{
                  style: { color: 'white' }, // Change text color to white
                  inputProps: { style: { color: 'white' } }, // Change input text color to white
                }}
                InputLabelProps={{ style: { color: 'black' } }} // Change label color to white
                sx={{ backgroundColor: 'white' }}
              />
            </Box>
            <Box mb={2} style={{ width: '100%' }}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                InputProps={{ style: { color: 'white' } }} // Change text color to white
                InputLabelProps={{ style: { color: 'black' } }} // Change label color to white
                sx={{ backgroundColor: 'white' }}
              />
            </Box>
            <Box mb={2} style={{ width: '100%' }}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                InputProps={{ style: { color: 'white' } }} 
                InputLabelProps={{ style: { color: 'black' } }} 
                sx={{ backgroundColor: 'white' }}
              />
            </Box>
            <Button variant="contained" color="primary" type="submit" sx={{ backgroundColor: 'darkgrey', marginLeft: '200px' }}>
              Submit
            </Button>
          </form>
        )}
      </Paper>
    </Container>
  );
};
