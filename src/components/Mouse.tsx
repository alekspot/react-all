import * as React from 'react';

type Props = {
    render: (pos: { x: number; y: number}) => JSX.Element
}

export const Mouse: React.FC<Props> = ({render}) => {
    const [pos, setPos] = React.useState({x: 0, y: 0});

    const handleMouseMove = (event: React.MouseEvent) => {
        setPos({
            x: event.clientX,
            y: event.clientY
        });
    };

    return <div style={{height: '100vh'}} onMouseMove={handleMouseMove}>
        {render(pos)}
    </div>;
};