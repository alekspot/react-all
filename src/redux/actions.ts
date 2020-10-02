import {PostType} from '@models/Post';
import {TodoType} from '@models/Todo';
import {ADD_POST, DELETE_POST, ADD_FETCH_TODO} from './types';

import {fetchTodo} from '../api';
import {BaseThunkType, InferActionsTypes} from './StoreProvider';

export const addPost = (post: PostType) => ({type: ADD_POST, post: post} as const);
export const deletePost = (id: number) => ({type: DELETE_POST, id: id} as const);

export const addFetchedTodo = (todo: TodoType[]) => ({type: ADD_FETCH_TODO, todo} as const);
export const loadTodo = (): ThunkType => {
    return async (dispatch) => {
        
        const todo = await fetchTodo();
        dispatch(addFetchedTodo(todo));
    };
};

export const postActions = {
    addPost, 
    deletePost
};

export const todoActions = {
    addFetchedTodo
};

type ActionType = InferActionsTypes<typeof todoActions>
type ThunkType = BaseThunkType<ActionType>