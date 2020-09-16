import * as React from 'react';

type Props = {
    x: number;
    y: number;
}

export const Cat = (mouse: Props):JSX.Element => {
    return <input style={{position: 'absolute', left: mouse.x, top: mouse.y}}></input> ;
};