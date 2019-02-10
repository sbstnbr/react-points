import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.primary.dark,
  },
});

class ScorePlayer extends React.Component {
  constructor(props) {
    super(props);
    const { name } = this.props;
    this.state = {
      open: false,
      name,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleValidateNewName = () => {
    const { handleUpdatePlayerName, players, id } = this.props;
    const { name } = this.state;
    handleUpdatePlayerName(players, id, name);
    this.setState({ open: false });
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { classes, name, points } = this.props;
    const { open } = this.state;
    return (
      <Grid item xs={6} style={{ minWidth: '30%' }}>
        <Grid container direction="column" alignItems="center">
          <Avatar className={classes.avatar} onClick={this.handleClickOpen}>
            {name.split('')[0]}
          </Avatar>
          <Typography variant="body1">{points}</Typography>
          <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
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
    );
  }
}

ScorePlayer.propTypes = {
  classes: PropTypes.shape({ avatar: PropTypes.string.isRequired }).isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleUpdatePlayerName: PropTypes.func.isRequired,
};

export default withStyles(styles)(ScorePlayer);
