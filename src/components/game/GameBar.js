import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const GameBar = ({ toggleDrawer, gameType }) => (
  <AppBar position="static" color="default">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu" onClick={() => toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h1" color="inherit">
        {gameType}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default GameBar;
