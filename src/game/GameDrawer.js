import React, { Component } from 'react'


import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom'

export default class GameDrawer extends Component {
  render() {
    const gameList = (
      <div>
        <List>
          {['Scopa', 'Wist'].map((text, index) => (
            <ListItem 
              button
              key={text}
              component={Link} 
              to={"/"+text}
              onClick={this.props.setGameType(text)}
            >
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
    return (
      <SwipeableDrawer
            open={this.props.open}
            onClose={this.props.toggleDrawer(false)}
            onOpen={this.props.toggleDrawer(true)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.props.toggleDrawer(false)}
              onKeyDown={this.props.toggleDrawer(false)}
              style={{width:'250px'}}
            >
              {gameList}
            </div>
          </SwipeableDrawer>
    )
  }
}
