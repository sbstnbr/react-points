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

class Score extends React.Component {
  constructor(props) {
    super(props);
    const { player } = this.props;
    this.state = {
      open: false,
      name: player.name,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleValidateNewName = () => {
    const { handleUpdatePlayerName, player } = this.props;
    const { name } = this.state;
    handleUpdatePlayerName(player.id, name);
    this.setState({ open: false });
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { classes, player, points } = this.props;
    const { open } = this.state;
    return (
      <Grid item xs={6} style={{ minWidth: '30%' }}>
        <Grid container direction="column" alignItems="center">
          <Avatar className={classes.avatar} onClick={this.handleClickOpen}>
            {player.name.split('')[0]}
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

Score.propTypes = {
  classes: PropTypes.shape({ avatar: PropTypes.string.isRequired }).isRequired,
  player: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  points: PropTypes.number.isRequired,
  handleUpdatePlayerName: PropTypes.func.isRequired,
};

export default withStyles(styles)(Score);
