import * as React from 'react';
import {CustomInput} from './ForwardRef';
import {RefType} from '@components/ForwardRef';

export const App: React.FC = () => {
    const inputRef = React.createRef<RefType>();


    const cbRef = (element: HTMLInputElement) => {
        element.focus();
    };

    return (
        <div>
            <h3>Parent with ref</h3>
            <CustomInput ref={inputRef} />

            <button onClick={() => {
                inputRef.current.focus();
            }}>focus</button>


            <h1/>
            <CustomInput ref={cbRef} />
            recive focus with cbRef

           
        </div>
    );
};