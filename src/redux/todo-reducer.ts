import {ADD_FETCH_TODO} from './types';
import {todoActions as actions} from './actions';
import {TodoType} from '@models/Todo';
import {InferActionsTypes} from './StoreProvider'; 

export type TodoState = {
    todo: TodoType[]
}

const initialState: TodoState = {
    todo: []
};

type ActionType = InferActionsTypes<typeof actions>

export const todoReducer = (state: TodoState = initialState, action: ActionType): TodoState => {
    switch (action.type) {
    case ADD_FETCH_TODO:
        return {
            ...state, 
            todo: [...state.todo, ...action.todo]
        };
    default:
        return state;
    }
};









