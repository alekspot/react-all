import * as React from 'react';
import {toStr} from '@utils/utils';
import {Test} from './Test/Test';


export const App: React.FC = () => {
    const [count, setCount] = React.useState(0);
    if (count) {
        return null; 
    }

    return (
        <div>App
            <Test />
            <button onClick={() => {setCount(count + 1);}}></button>
        </div>
    );
};