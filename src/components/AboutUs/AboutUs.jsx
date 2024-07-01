import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

export const AboutUs = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4, backgroundColor: 'black', padding: '20px',
     borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',   marginTop: '230px', 
     marginBottom: '30px',}}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontFamily: 'Roboto', color: 'white' }}>
        About Us
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontFamily: 'Roboto', color: 'white' }}>
        Welcome to [Our Gaming Gallery]! We are a passionate team of developers currently working on our final project!
        Our mission is to deliver exceptional user experiences through innovative and intuitive design.
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontFamily: 'Roboto', color: 'white' }}>
        Our Team
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary={<span style={{ color: 'gold', fontWeight: 'bold' }}>Rodriges Dema</span>} secondary={<span style={{ color: 'gold', fontWeight: 'bold' }}>Lead Developer</span>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<span style={{ color: 'gold', fontWeight: 'bold' }}>Rasim Domi</span>} secondary={<span style={{ color: 'gold', fontWeight: 'bold' }}>Frontend Developer</span>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<span style={{ color: 'gold', fontWeight: 'bold' }}>Fabio Pashollari</span>} secondary={<span style={{ color: 'gold', fontWeight: 'bold' }}>Frontend Developer</span>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<span style={{ color: 'gold', fontWeight: 'bold' }}>Sara Rusi</span>} secondary={<span style={{ color: 'gold', fontWeight: 'bold' }}>Frontend Developer</span>} />
        </ListItem>
        <ListItem>
          <ListItemText primary={<span style={{ color: 'gold', fontWeight: 'bold' }}>Euserio Nikolli</span>} secondary={<span style={{ color: 'gold', fontWeight: 'bold' }}>Frontend Developer</span>} />
        </ListItem>
      </List>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontFamily: 'Roboto', color: 'white' }}>
        Our Vision
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontFamily: 'Roboto', color: 'white' }}>
        Our vision is to empower businesses and individuals by providing them with cutting-edge web solutions that are not only 
        functional but also visually appealing. We believe in the power of technology to transform lives 
        and strive to make a positive impact through our work.
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontFamily: 'Roboto', color: 'white' }}>
        Our Values
      </Typography>
      <Box component="div" sx={{ mb: 2 }}>
        <Typography variant="h6" component="h3" sx={{ fontFamily: 'Roboto', color: 'white' }}>
          Innovation
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontFamily: 'Roboto', color: 'white' }}>
          We constantly explore new technologies and approaches to stay ahead in the industry.
        </Typography>
        <Typography variant="h6" component="h3" sx={{ fontFamily: 'Roboto', color: 'white' }}>
          Quality
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontFamily: 'Roboto', color: 'white' }}>
          We are committed to delivering products that meet the highest standards of quality.
        </Typography>
        <Typography variant="h6" component="h3" sx={{ fontFamily: 'Roboto', color: 'white' }}>
          Collaboration
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontFamily: 'Roboto', color: 'white' }}>
          We believe in the power of teamwork and work closely with our clients and each other for the creation of exceptional works.
        </Typography>
        <Typography variant="h6" component="h3" sx={{ fontFamily: 'Roboto', color: 'white' }}>
          Integrity
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontFamily: 'Roboto', color: 'white' }}>
          We conduct our business with honesty and transparency.
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ fontFamily: 'Roboto', color: 'white' }}>
        Thank you for visiting our page. We look forward to collaborating with you!
      </Typography>
    </Container>
  );
};

