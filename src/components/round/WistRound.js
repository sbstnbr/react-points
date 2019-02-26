import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import Round from './Round';
import WistRoundResult from './WistRoundResult';

const styles = theme => ({
  badge: {
    top: 'unset',
    bottom: '-50%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

function getSteps() {
  return ['Bid', 'Result'];
}

function WistRound(props) {
  // const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const steps = getSteps();

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  const {
    classes, activeStep, handleSwitchActiveStep, children,
  } = props;
  return (
    <Round>
      <CardContent>
        <Grid container spacing={16}>
          {children}
        </Grid>
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton
          className={classnames(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={handleSwitchActiveStep(index)}>{label}</StepButton>
            </Step>
          ))}
        </Stepper>
      </Collapse>
    </Round>
  );
}

export default withStyles(styles)(WistRound);
