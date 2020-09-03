import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DropdownDemo } from './components/DropdownDemo';
import './scss/index.scss';


function render(): void {
    ReactDOM.render(<DropdownDemo/>, document.getElementById('app'));
}


render();