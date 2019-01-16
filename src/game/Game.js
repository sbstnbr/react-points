import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import RoundList from './../round/RoundList';
import Score from './../score/Score';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameType: 'Scopa',
      ...this.defaultState
    };
    this.createRound = this.createRound.bind(this);
    this.addPoint = this.addPoint.bind(this);
    this.resetRound = this.resetRound.bind(this);
    this.updatePlayerName = this.updatePlayerName.bind(this);
    this.setGameType = this.setGameType.bind(this);
  }

  defaultState = {
    rounds:[],
    players: ["Jess", "Seb"],
    open: false
  };

  createRound(){
    return this.setState({
      rounds: this.state.rounds.concat([{
        "id": this.state.rounds.length,
        "result": new Array(this.state.players.length).fill(0)
      }])
    });
  }

  addPoint(rounds,roundId,player){
    //TODO: Improve
    let updatedRound = {...rounds[roundId]};
    updatedRound.result[player]+=1;
    let updatedRounds = rounds.slice();
    updatedRounds.splice(roundId,1,updatedRound);
    return this.setState({
      rounds: updatedRounds
    })
  }

  resetRound(rounds,roundId){
    let updatedRound = {...rounds[roundId]};
    updatedRound.result = new Array(this.state.players.length).fill(0);
    let updatedRounds = rounds.slice();
    updatedRounds.splice(roundId,1,updatedRound);
    return this.setState({
      rounds: updatedRounds
    })
  }

  updatePlayerName(players,id,newName){
    let updatedPlayers = players.slice();
    updatedPlayers[id]=newName;
    return this.setState({
      players: updatedPlayers
    })
  }

  setGameType = gameType => () => {
    this.toggleDrawer(false);
    return this.setState({
      gameType,
      ...this.defaultState
    })
  }

  toggleDrawer = (open) => () => {
    this.setState({
      open: open,
    });
  };

  render(){
    const gameList = (
      <div>
        <List>
          {['Scopa', 'Wist'].map((text, index) => (
            <ListItem 
              button
              key={text}
              onClick={this.setGameType(text)}
            >
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
    return (
      <div className={this.props.classes.root}>
          
        <Grid container spacing={16}>
          <AppBar position="static">
          {/* <AppBar> */}
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
                {this.state.gameType}
              </Typography>
            </Toolbar>
          </AppBar>
          <SwipeableDrawer
            open={this.state.open}
            onClose={this.toggleDrawer(false)}
            onOpen={this.toggleDrawer(true)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer(false)}
              onKeyDown={this.toggleDrawer(false)}
              style={{width:'250px'}}
            >
              {gameList}
            </div>
          </SwipeableDrawer>
          <Score 
            rounds={this.state.rounds}
            players={this.state.players}
            handleUpdatePlayerName={this.updatePlayerName}
          />
          <RoundList 
            rounds={this.state.rounds}
            handleNewRound={this.createRound}
            handleAddPoint={this.addPoint}
            handleResetRound={this.resetRound}
          />
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Game);
