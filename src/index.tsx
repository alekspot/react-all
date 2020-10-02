import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from '@components/App';
import {StoreProvider} from './redux/StoreProvider';
import './scss/index.scss';

ReactDOM.render(
    <StoreProvider>
        <App/>
    </StoreProvider>,
    document.getElementById('app')
);
