import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components';
import {Provider} from 'react-redux';
import Main from './components/main';
import Store from './store';
import Capi from './capi';

const transporter = window.simcapi.Transporter;

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
    body {
        padding: 0;
        margin: 0;
        font-family: Roboto, sans-serif;
    }
`;

function init() {
    ReactDOM.render(
        <Provider store={Store.configureStore()}>
            <Fragment>
                <GlobalStyle />
                <Main />
            </Fragment>
        </Provider>,
        document.getElementById('root')
    );

    Capi.expose(Store);
}

function boot() {
    transporter.addInitialSetupCompleteListener(init);
    transporter.notifyOnReady();
}

document.addEventListener('DOMContentLoaded', boot);
