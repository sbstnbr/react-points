import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

class ScorePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: this.props.name
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleValidateNewName = () => {
    this.props.handleUpdatePlayerName(this.props.players,this.props.id,this.state.name);
    this.setState({ open: false });
  };

  handleChange = (e) => {
    this.setState({name: e.target.value});
  }

  render(){
    return (
      <Grid item xs={6} style={{minWidth:'30%'}}> 
        <Grid container direction="column" alignItems="center"> 
          <Avatar onClick={this.handleClickOpen}>
            {this.props.name.split('')[0]}
          </Avatar>
          {this.props.points}
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Update player name</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="newName"
                label="New Name"
                fullWidth
                onChange={this.handleChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="secondary">
                Cancel
              </Button>
              <Button onClick={this.handleValidateNewName} color="primary">
                Validate
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>       
      </Grid>
    )
  }
}

export default ScorePlayer;