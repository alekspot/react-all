import {ADD_POST, DELETE_POST} from './types';
import {PostType} from '@models/Post';
import {postActions as actions} from './actions';
import {InferActionsTypes} from './StoreProvider';

export type PostState = {
    posts: PostType[]
}

const initialState: PostState = {
    posts: []
};

type ActionType = InferActionsTypes<typeof actions>

export const postReducer = (state: PostState = initialState, action: ActionType): PostState => {
   
    switch (action.type) {
    case ADD_POST:
        return {
            ...state, 
            posts: [...state.posts, action.post]
        };
    case DELETE_POST:
        return {
            ...state, 
            posts: state.posts.filter(post => post.id !== action.id)
        };
    default:
        return state;
    }
};









