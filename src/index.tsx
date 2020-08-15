import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DateRangePickerContainer } from './components/DatePicker/DateRangePickerContainer';
import './scss/index.scss'

function render() {
    ReactDOM.render(<DateRangePickerContainer/>, document.getElementById('app'));
}

render()