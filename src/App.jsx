import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="title" color="inherit">
          React, Material-UI & Parcel bundler bolierplate
        </Typography>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
