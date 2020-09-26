import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from '@components/App';
import './scss/index.scss';
import {StoreProvider} from './store/StoreContext';

function render() {
    ReactDOM.render(
        <StoreProvider>
            <App/>
        </StoreProvider>,
     
        document.getElementById('app'));
}


render();