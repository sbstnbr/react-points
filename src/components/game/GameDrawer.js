import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PollIcon from '@material-ui/icons/Poll';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import GameAnimatedIcon from './GameAnimatedIcon';

const styles = {
  drawer: {
    width: '250px',
    height: '100%',
    position: 'relative',
  },
  icon: {
    width: '100%',
    position: 'absolute',
    bottom: '20px',
  },
};

const GameDrawer = ({ open, toggleDrawer, classes }) => {
  const gameList = (
    <div>
      <List>
        {['Scopa', 'Wist'].map((text, index) => (
          <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`}>
            <ListItemIcon>{index % 2 === 0 ? <LocalCafeIcon /> : <PollIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <SwipeableDrawer
      open={open}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
        className={classes.drawer}
      >
        <Typography variant="h2">
          {' '}
          {gameList}
        </Typography>
        <div className={classes.icon}>
          <GameAnimatedIcon />
        </div>
      </div>
    </SwipeableDrawer>
  );
};

GameDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default withStyles(styles)(GameDrawer);
