import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Round from './Round';

const styles = {
  badge: {
    top: 'unset',
    bottom: '-50%',
  },
};

function getSteps() {
  return ['Bid', 'Result'];
}

function WistRound(props) {
  // const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const steps = getSteps();

  function totalSteps() {
    return steps.length;
  }

  function completedSteps() {
    return Object.keys(completed).length;
  }

  function isLastStep() {
    return activeStep === totalSteps() - 1;
  }

  function allStepsCompleted() {
    return completedSteps() === totalSteps();
  }

  function handleNext() {
    let newActiveStep;

    if (isLastStep() && !allStepsCompleted()) {
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      newActiveStep = steps.findIndex((step, i) => !(i in completed));
    } else {
      newActiveStep = activeStep + 1;
    }
    setActiveStep(newActiveStep);
  }

  // function handleBack() {
  //   setActiveStep(prevActiveStep => prevActiveStep + 1);
  // }

  const handleStep = step => () => {
    setActiveStep(step);
  };

  // function handleComplete() {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // }

  // function handleReset() {
  //   setActiveStep(0);
  //   setCompleted({});
  // }
  const {
    result, id, handleAddPoint, handleResetRound, classes,
  } = props;
  return (
    <Round>
      <Grid container spacing={16}>
        {result.map((score, playerId) => (
          <Grid
            item
            container
            key={playerId}
            // className={classes.result}
            xs={6}
            alignItems="center"
            direction="column"
          >
            <Badge color="primary" badgeContent={2}>
              <Button
                variant="contained"
                onClick={() => handleAddPoint(id, playerId)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  return handleResetRound(id, playerId);
                }}
              >
                {score}
              </Button>
            </Badge>
          </Grid>
        ))}
      </Grid>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton onClick={handleStep(index)} completed={completed[index]}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Round>
  );
}

export default withStyles(styles)(WistRound);
