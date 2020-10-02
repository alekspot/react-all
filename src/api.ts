import {TodoType} from '@models/Todo';

export const fetchTodo = (): Promise<TodoType[]> => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json());
};


    