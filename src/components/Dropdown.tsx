import * as React from 'react';
import isEqual from 'lodash.isequal';
import './dropdown.scss';

type Props = {
    options: any[],
    value?: any,
    onChange?(value: any): void,
    labelKey?: string
}

export const Dropdown: React.FC<Props> = ({options, value, labelKey, onChange}: Props): JSX.Element => {
    

    if(options && !options.length) {
        return null;
    }

    let index = 0;
    const dropdownRef = React.useRef();

    
    if(value) {
        const foundedIndex = options.findIndex(option => isEqual(option, value));

        try {
            if(foundedIndex >= 0) {
                index = foundedIndex;
            } else {
                throw new Error('Dropdown has incorrect value');
            }
        } catch(err) {
            index = 0;
            console.error(err);
        } 
    }
    
    const [selected, setSelected] = React.useState(index);
    const [open, isOpen] = React.useState(false);
    React.useEffect(() => {
        document.addEventListener('mousedown', () => {
            console.log(open);
            if(open) {
                isOpen(false);
            }
        });
    }, []);
    const onSelect = (value: any, index: any): any => {
        if(index !== selected) {
            setSelected(index);
            if (onChange) onChange(value);
        }
        isOpen(false);
    };

    const toggleDropdown = (): void => {
        isOpen(prevOpen => !prevOpen);
    };

    const isPrimitve = (options: any[]): boolean => {
        return typeof options[0] === 'string' || typeof options[0] === 'number' || React.isValidElement(options[0]);
    };
 
    let label: string;
    let renderOptions;
    
    if(labelKey) {

    }

    if(isPrimitve(options)) {
        renderOptions = options.map((item, index) => {
            return <li onClick={(): void => onSelect(item, index)} key={index}>{item}</li>;
        });
    } else {
        const hasLabel = Object.keys(options[0]).some(key => labelKey === key);
        label = hasLabel ? labelKey : Object.keys(options[0]).filter(key => isPrimitve(options[0][key]))[0];
        
        renderOptions = options.map((item, index) => {
            return <li onClick={(): void => onSelect(item, index)} key={index}>{item[label]}</li>;
        });
    }
   
    return (
        <div>
            <button onClick={toggleDropdown}>{isPrimitve(options) ? options[selected] : options[selected][label]}</button>
            { open && <ul ref={dropdownRef}>
                {renderOptions}
            </ul>}
        </div>
    );
};