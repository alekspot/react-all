import * as React from 'react';
import {DateRangePicker} from './DateRangePicker'
import {setHours, setMinutes} from 'date-fns';

export const DateRangePickerContainer: React.FC = () => {

    const today = setHours(setMinutes(new Date, 0), 10);
    const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
    const [startDate, setStartDate] = React.useState(setHours(setMinutes(today, 0),10));
    const [endDate, setEndDate] = React.useState(setHours(setMinutes(tomorrow, 0),10));

    
    return <div>

        <DateRangePicker {...{startDate, setStartDate, endDate, setEndDate}}/>
        {startDate.toLocaleString()}
        <br/>
        {endDate.toLocaleString()}
    </div>
    
}