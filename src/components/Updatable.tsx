import * as React from 'react';
import {Const} from './Memo';

type Props = {
    count: number
}

export const Updatable: React.FC<Props> = ({count}) => {
    //const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

    const memoChild1 = React.useMemo(() => <div>useMemo count:{count}</div>, []);

    const memoChild2 = React.useMemo(() => <div>useMemo count:{count}</div>, [count]);


    return (
        <>
            <h3>Updatable</h3>
            count: {count}
            <Const />
            {memoChild1}
            {memoChild2}
        </>
        
    );
};