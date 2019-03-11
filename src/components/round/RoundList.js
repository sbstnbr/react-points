import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({});

const RoundList = ({ children }) => (
  <Grid item container direction="column" alignItems="center" spacing={16}>
    {children}
  </Grid>
);

RoundList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(RoundList);
