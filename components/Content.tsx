import * as React from 'react';

export const Content: React.FC = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h2>Content</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}