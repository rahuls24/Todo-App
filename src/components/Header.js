import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
const Header = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex',flexDirection: 'row', justifyContent: 'center' }}>
        <Box >
        <Typography
            variant="h6"
            noWrap
            component="div"
          >
            TODO APP
          </Typography>
        </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
