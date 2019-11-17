import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { Neo4jGraphRenderer } from 'neo4j-graph-renderer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

var url = "http://localhost:7474"

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
  },

  neoContainer: {
      paddingLeft: 5,
      paddingRight: 5,
      marginRight: 5,
      marginLeft: 5,
  },

  optionToolbar:{
    backgroundColor: '#ff1493',
  },

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

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function GraphRenderer(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState("MATCH (n)-[r]->(m) RETURN n,r,m");
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleChange = (event) => {
      setValue(event.target.value);
      console.log("In option", event.target.value)
    };

     console.log(value);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Web-based Workflows</Typography>
        </Toolbar>
      </AppBar> 
      <Toolbar id="back-to-top-anchor" className= {classes.optionToolbar} />
      <div className={classes.grow}>
      <AppBar position="static" >
        <Toolbar className = {classes.optionsToolbar}>
        <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.nodeButton}>
         Run your own query 
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className = {classes.NodeDialog} fullWidth>
        <DialogTitle id="form-dialog-title">
          <h2>Query</h2> 
        <h5>(Default command to show all nodes and relationships is MATCH (n)-[r]->(m) RETURN n,r,m )</h5>
        <h5>Copy Paste your Cypher query</h5>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            refs="personal_query"
            label="Cypher Query"
            type="email"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick = {handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        </Toolbar>
      </AppBar>
    </div>
      <Container className={classes.neoContainer} maxWidth = "xl">
        <Box my={2} className = {classes.neoBox}>
        <Neo4jGraphRenderer url={url} user={"neo4j"}
            password={"saloni"} query= {value} className= {classes.graph} />
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}