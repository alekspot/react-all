import {observable, computed, action} from 'mobx';
import {fetchTodos} from '../api';
import {Todo} from '../types/Todo';


export class TodoStore {
    @observable todos: Todo[] = [];
    @observable count = 0;
   
    @action loadTodos = (): void=> {
        fetchTodos().then(todos => {

            this.todos = todos;
        }
        );
    }

    @action add = (): void=> {
        this.count = this.count + 1;
    }

    @computed get getTodos(): Todo[] {
        return this.todos;
    }

    @computed get getCount(): number {
        return this.count;
    }
}