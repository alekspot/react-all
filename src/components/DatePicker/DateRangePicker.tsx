import * as React from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { setHours, setMinutes, getMinutes, isBefore, isSameDay} from 'date-fns';
registerLocale('ru', ru);
//import 'react-datepicker/dist/react-datepicker.css';


type DatePickerProps = {
    startDate: Date;
    setStartDate: React.Dispatch<React.SetStateAction<Date>>;
    endDate: Date;
    setEndDate: React.Dispatch<React.SetStateAction<Date>>;
}

type TimeInputProps = {
    value?: string;
    onClick?: () => void
}

type Ref = HTMLButtonElement;

export const DateRangePicker: React.FC<DatePickerProps> = (props) => {

    const {startDate, setStartDate, endDate, setEndDate} = props;
 
    const TimeInput = React.forwardRef<Ref, TimeInputProps>(({value, onClick}, ref) => (
        
        <button className="example-custom-input" ref={ref} onClick={onClick}>
            {value}
        </button>
    ));

    const setValidEndDate = (date: Date) => {
        if(isBefore(date, startDate )) {
            setEndDate((setMinutes(startDate, getMinutes(startDate) + 30)))
        } else {
            setEndDate(date)
        }
    }  
    
    const setValidStartDate = (date: Date) => {
        if(isBefore(endDate, date )) {
            setEndDate((setMinutes(date, getMinutes(date) + 30)))
        }
        setStartDate(date);
    }  

    const setMaxTime = () => {
        if(isSameDay(startDate, endDate)){
            return setMinutes(startDate, getMinutes(startDate) + 30)
        }
        return setHours(setMinutes(endDate, 0), 10)
    }

    const timepicker = {
        showTimeSelect: true,
        showTimeSelectOnly: true,
        timeIntervals: 30,
        dateFormat:'HH:mm',
        timeFormat:'HH:mm',
        startDate: startDate,
        endDate: endDate
        
    }

    const datepicker = {
        locale: 'ru',
        dateFormat: 'dd.MM.yyyy',
        startDate:startDate,
        endDate:endDate
    }

    return (
        <div className="d-flex">
            <DatePicker 
                {...datepicker}
                selected={startDate}
                onChange={(date: Date) => setValidStartDate(date)}
                selectsStart
                maxDate={endDate}
                
            />
            <DatePicker
                {...timepicker}
                minTime={setHours(setMinutes(startDate, 0), 10)}
                maxTime={setHours(setMinutes(startDate, 0), 18)}
                minDate={startDate}
                selected={startDate}
                onChange={(date: Date) => setValidStartDate(date)}
                customInput={<TimeInput /> }
                selectsStart
            />
            <span>-</span>
            <DatePicker 
                {...datepicker}
                selected={endDate}
                onChange={(date: Date) => setValidEndDate(date)}
                selectsEnd
                minDate={startDate}
            />
            <DatePicker
                {...timepicker}
                minTime={setMaxTime()}
                maxTime={setHours(setMinutes(endDate, 0), 18)}
                selected={endDate}
                onChange={(date: Date) => setValidEndDate(date)}
                customInput={<TimeInput /> }
                selectsEnd
            />
        </div>
        
    )
}