import * as React from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru);

//import 'react-datepicker/dist/react-datepicker.css';


export const App: React.FC = () => {
    const [selected, setDate] = React.useState(new Date())

    const onChange = (date: Date) => setDate(date);
    
    const ExampleCustomTimeInput = ({ value, onChange }) => (
        <input
            value={value}
            onChange={e => onChange(e.target.value)}
            style={{ border: 'solid 1px pink' }}
        />
    );
    return (
        <DatePicker 
            {...{onChange, selected}}
            locale="ru"
            showTimeSelect
            dateFormat="dd.MM.yyyy"
        />
    )
}