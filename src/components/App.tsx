import * as React from 'react';
import {observer} from 'mobx-react';
import {useTodoStore} from '../store/StoreContext';

export const App: React.FC = observer(() => {
    const {add, getCount, loadTodos, getTodos} = useTodoStore();

    const [arr, setArr] = React.useState([]);

    
    React.useEffect(() => {
        // add();
        //loadTodos();
        //setArr([1, 2, 3]);
    }, []);

    return (
        
        <div>
            <div>
                {console.log('render')}
                {getCount}
            </div>
            <div>
                {/* {
                    getTodos.map(t => {
                        debugger
                        return <p key={t.id}>{t.title}</p>;
                    })
                } */}
                {arr.map(n => {
                    console.log('render!!!');
                    debugger;
                    return <h1 key={n}>{n.id}</h1>;
                })}
            </div>

            <button onClick={() => {add();}}>+</button>
        </div>
    );
});

