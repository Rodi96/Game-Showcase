import { Container, Box, TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../Login/AuthContext';

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignUp = (event) => {
    event.preventDefault();

    if (username.length < 7) {
      setUsernameError('Username must be at least 7 characters');
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must have at least 8 characters, 1 capital letter, 1 number, and 1 symbol');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }
    login();
    navigate('/');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: '16px', marginTop: '250px', marginBottom: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', backgroundColor: 'black' }}>
        <Typography component="h1" variant="h5" sx={{ color: 'white' }}>
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSignUp} sx={{ width: '100%', marginTop: '8px' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setUsernameError('');
            }}
            error={Boolean(usernameError)}
            helperText={usernameError}
            sx={{ backgroundColor: 'white' }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError('');
            }}
            error={Boolean(passwordError)}
            helperText={passwordError}
            sx={{ backgroundColor: 'white' }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError('');
            }}
            error={Boolean(confirmPasswordError)}
            helperText={confirmPasswordError}
            sx={{ backgroundColor: 'white' }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ margin: '24px 0 16px', backgroundColor: 'darkgrey' }}
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
      <Box sx={{ marginTop: '16px', textAlign: 'center', color: 'green', backgroundColor: 'black', 
            marginBottom: '50px', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        <Typography variant="body1" sx={{ color: 'white' }}>
          Are you already part of our community? If so you can directly enter from&nbsp;
          <Link to="/login" style={{ color: 'green', textDecoration: 'underline' }}>here</Link>.
        </Typography>
      </Box>
    </Container>
  );
};
