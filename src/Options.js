import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  optionsToolbar: {
      backgroundColor: '#ff1493',
  },
  nodeButton: {
    backgroundColor: "white",
},

NodeDialog: {
    flexDirection: "row",
    maxWidth: "lg",
},
}));

export default function Option(props) {
  const classes = useStyles();

  



  return (
    <div className={classes.grow}>
      <AppBar position="static" >
        <Toolbar className = {classes.optionsToolbar}>
        <div>
      <Button variant="outlined" color="primary" onClick={props.handleClickOpen} className={classes.nodeButton}>
         Run your own query 
      </Button>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" className = {classes.NodeDialog} fullWidth>
        <DialogTitle id="form-dialog-title">Query</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            refs="personal_query"
            label="Cypher Query"
            type="email"
            fullWidth
            onChange={props.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onSubmit = {props.handleChange} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}