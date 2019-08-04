import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: red,
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Raleway',
    h1: {
      textTransform: 'uppercase',
      fontWeight: '600',
      fontSize: 18,
    },
    h2: {
      textTransform: 'uppercase',
      fontWeight: '600',
      fontSize: 12,
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);

serviceWorker.register();
