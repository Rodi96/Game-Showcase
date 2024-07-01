import { Box, Typography, Link } from '@mui/material';
import FacebookIcon from "../Footer/FooterAssets/facebookicon.png";
import TwitterIcon from "../Footer/FooterAssets/twittericon.png";
import InstagramIcon from "../Footer/FooterAssets/instagramicon.png";

export const Footer = () => {
  return (
    <Box
      className="footer-container"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px', 
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    > 
      <Typography variant="body2" className="footer-text" sx={{ marginRight: '20px' }}>
        © 2024 RodriSHPK. All rights reserved.
      </Typography>
      <Box className="footer-text" sx={{ marginRight: '20px' }}>
        <Link href="#" className="footer-text footer-icon" sx={{ color: 'inherit', marginRight: '10px' }}>
          Privacy Policy
        </Link>
        <Link href="#" className="footer-text footer-icon" sx={{ color: 'inherit', marginRight: '10px' }}>
          Terms of Service
        </Link>
        <Link href="#" className="footer-text footer-icon" sx={{ color: 'inherit' }}>
          Contact Us
        </Link>
      </Box>
      <Link href="#" className="footer-icon" sx={{ marginRight: '20px' }}>
        <img src={FacebookIcon} alt="Facebook" style={{ width: '14px', height: '14px', marginTop: '3px' }} />
      </Link>
      <Link href="#" className="footer-icon" sx={{ marginRight: '20px' }}>
        <img src={TwitterIcon} alt="Twitter" style={{ width: '14px', height: '14px', marginTop: '3px' }} />
      </Link>
      <Link href="#" className="footer-icon">
        <img src={InstagramIcon} alt="Instagram" style={{ width: '14px', height: '14px', marginTop: '3px' }} />
      </Link>
    </Box>
  );
};
