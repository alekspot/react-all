import * as React from 'react';
import {loadTodo} from '../redux/actions';
import {connect} from 'react-redux';
import {AppStateType} from 'src/redux/StoreProvider';
import {TodoType} from '@models/Todo';

type Props = {
    todo: TodoType[]
    loadTodo: () => void
}

const FetchedPost: React.FC<Props> = ({todo, loadTodo}) => {
   
    if (!todo.length) {
        return <button onClick={() => loadTodo()}>Load</button>;
    }

    return (
        <div>
            {todo.map(t => <p key={t.id}>{t.title}</p>)}
        </div>
    );
};

const mapStateToProps = ({todo}: AppStateType) => ({
    todo: todo.todo
});

const mapDispatchToProps = {
    loadTodo
};


export default connect(mapStateToProps, mapDispatchToProps)(FetchedPost);

