import * as React from 'react';
import {Updatable} from '@components/Updatable';



export const App: React.FC = () => {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <Updatable {...{count}}/>
            <button onClick={() => {setCount(count + 1);}}>+</button>
        </>
    );
};