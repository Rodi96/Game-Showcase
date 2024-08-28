import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import { Home } from '../components/Home/Home';
import { TopGames } from '../components/TopGames/TopGames';
import { NewReleases } from '../components/NewReleases/NewReleases';
import { Platforms } from '../components/Platforms/Platforms';
import { AboutUs } from '../components/AboutUs/AboutUs';
import { Support } from '../components/Support/Support';
import { Login } from '../components/Login/Login';
import { SignUp } from '../components/SignUp/SignUp';
import { MyLibrary } from '../components/MyLibrary/MyLibrary';
import GameDetail from '../components/Home/GameDetails';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from '../components/Login/AuthContext';
import { PlatformGames } from '../components/Platforms/PlatformGames';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { useState } from 'react';

export const CustomRoutes = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <AuthProvider>
      <Router>
        <Header className="header" />
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Box className="main-content">
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 1)', 
            zIndex: -1, 
          }}></div>
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} onSearchChange={handleSearchChange} />} />
            <Route path="/new-releases" element={<NewReleases />} />
            <Route path="/top-games" element={<PrivateRoute element={TopGames} />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/platforms/:platformId" element={<PlatformGames />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/games/:id" element={<GameDetail />} />
            <Route path="/my-library" element={<PrivateRoute element={MyLibrary} />} />
          </Routes>
        </Box>
        <Footer className="footer" />
      </Router>
    </AuthProvider>
  );
};
