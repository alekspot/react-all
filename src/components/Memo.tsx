import * as React from 'react';

export const Const = React.memo(() => {

    React.useEffect(() => {
        console.debug('Const render!');
    });

    return <div>react.memo() render 1 time</div>;
});



// Если принимает пропсы, то можно отменить перерисовку при их изменении

// export const Const = React.memo<Props>(() => {

//     React.useEffect(() => {
//         console.debug('Const render!');
//     });

//     return <div>react.memo() render 1 time</div>;
// }, (prevProps) => {
//     console.debug({prevProps});

//     return false;

// });

// export const Const: React.FC = () => {

//     React.useEffect(() => {
//         console.debug('Const render!');
//     });

//     return <div>Const</div>;
// };