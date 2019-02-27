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

function GameDrawer(props) {
  const { open, toggleDrawer } = props;
  const gameList = (
    <div>
      <List>
        {['Scopa', 'Wist'].map((text, index) => (
          <ListItem button key={text} component={Link} to={`/${text}`}>
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
        style={{ width: '250px' }}
      >
        {gameList}
      </div>
    </SwipeableDrawer>
  );
}

GameDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default GameDrawer;
