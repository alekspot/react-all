import * as React from 'react';
import Dropdown, {Option} from 'react-dropdown';
import './dropdown.scss';

export const DropdownDemo: React.FC = () => {

    const options1 = ['1', '2', '3'];

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

    type LabelType<T> = {
        labelKey: keyof T;
        component: (label: string) => React.ReactNode
    } | keyof T;

    const toOptions = <T extends Record<string, unknown>,>(arr: T[], { valueKey, labelKey }: { valueKey: keyof T; labelKey: any}): Option[] => {
        return arr.map((item, index) => ({
            value: `${item[valueKey]}`,
            label: typeof labelKey === 'string' ? `${item[labelKey]}` : React.cloneElement(labelKey.component(item[labelKey.labelKey]))
        }));
    };  

    const test = toOptions(options2, {
        labelKey: {
            labelKey: 'name',
            component: (label: string): JSX.Element => <h1>{label}</h1>,
        },
        valueKey: 'age'
    });

    const onChangeAdapter = (onChangeHandler: (value: string) => void): (option: Option) => void => {
        return (option: Option): void => onChangeHandler(option.value);
    };

    const ttt = [{ value: '1', label: '2' }, { value: 'a', label: '2' }];



    return <Dropdown options={ttt} onChange={onChangeAdapter((value) => alert(value))} baseClassName="dropdown" placeholder=""/>;
};