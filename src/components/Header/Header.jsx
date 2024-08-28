import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import image1 from '../Header/HeaderAssets/image672.jpg';
import image2 from '../Header/HeaderAssets/image668.jpg';
import image3 from '../Header/HeaderAssets/image705.jpg';


const images = [image1, image2, image3 ];

export const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      handlePrevImage();
    } else if (event.key === 'ArrowRight') {
      handleNextImage();
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        height: '130px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '3px solid white',
        borderRadius: '10px',
        overflow: 'hidden',
        padding: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <button
        onClick={handlePrevImage}
        onKeyDown={handleKeyDown}
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '2rem',
          color: 'white',
          cursor: 'pointer',
          left: '20px',
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        &#9664;
      </button>
      <button
        onClick={handleNextImage}
        onKeyDown={handleKeyDown}
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '2rem',
          color: 'white',
          cursor: 'pointer',
          right: '20px',
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        &#9654;
      </button>
      <Typography
        variant="body1"
        sx={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          color: 'white',
          fontStyle: 'italic',
          paddingRight: '40px', 
        }}
      >
        Games are the most relaxing of all endeavors.
      </Typography>
    </Box>
  );
};
