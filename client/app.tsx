import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from '@components/Header';
import {Content} from '@components/Content';
import '../src/scss/index.scss';

ReactDOM.hydrate(<Header />, document.getElementById('header'))
ReactDOM.hydrate(<Content />, document.getElementById('content'))