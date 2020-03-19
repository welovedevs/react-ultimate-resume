/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { StylesProvider } from '@material-ui/core/styles';
import './styles/global.css';
import './styles/animations.css';

ReactDOM.render(
    <StylesProvider injectFirst>
        <App />
    </StylesProvider>,
    document.getElementById('root')
);
