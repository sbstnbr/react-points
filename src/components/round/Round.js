import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  result: {
    // justify: 'center',
  },
  round: {
    width: '100%',
  },
};

function Round(props) {
  const { classes, children } = props;
  return (
    <Grid item xs={12} className={classes.round}>
      <Card>{children}</Card>
    </Grid>
  );
}

Round.propTypes = {
  classes: PropTypes.shape({ result: PropTypes.string.isRequired }).isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Round);
