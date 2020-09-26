import {Todo} from '../src/types/Todo';

export const fetchTodos = ():Promise<Todo[]> => {
    return fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json());
        
        
};