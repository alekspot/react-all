import * as React from 'react';
import {Dropdown} from './Dropdown';


export const DropdownDemo: React.FC = () => {

    const options1 = [1,2,3];

    const options2 = [
        {
            name: 'Alex',
            age: 14,
            country: 'wwwww'
        },
        {
            name: 'Oleg',
            age: 12,
            country: 'sac'
        },
        {
            name: 'Vanya',
            age: 13,
            country: 'mnygn'
        },
        {
            name: 'Lesha',
            age: 6,
            country: 'rty'
        },
    ];
    
    return <>
        <Dropdown 
            options={[1,2,3]}
            value={1}
            //labelKey={'name'}
            onChange={(value: any): void => alert(value)}>
        </Dropdown>
    </>;
};