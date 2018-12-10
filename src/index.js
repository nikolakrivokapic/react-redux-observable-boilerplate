import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components';
import {Provider} from 'react-redux';
import Main from './components/main';
import configureStore from './store';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
    body {
        padding: 0;
        margin: 0;
        font-family: Roboto, sans-serif;
    }
`;

ReactDOM.render(
    <Provider store={configureStore()}>
        <Fragment>
            <GlobalStyle />
            <Main />
        </Fragment>
    </Provider>,
    document.getElementById('root')
);
