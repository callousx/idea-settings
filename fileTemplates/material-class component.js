/*
 * SHABLON
 *
 */
import React from 'react';
import {Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

/* eslint-disable react/prefer-stateless-function */

const styles = (theme) => ({
  mainGrid: {
    marginTop: theme.spacing.unit * 6,
  },
});

class AccountAddForm extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.mainGrid}>
        <Typography variant="h6">
          Добавленые аккаунты
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(AccountAddForm);