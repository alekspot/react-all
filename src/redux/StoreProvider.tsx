import * as React from 'react';
import {createStore, applyMiddleware, combineReducers, Action} from 'redux';
import {Provider} from 'react-redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {postReducer} from './post-reducer';
import {todoReducer} from './todo-reducer';
import logger from 'redux-logger';
const rootReducer = combineReducers({
    post: postReducer,
    todo: todoReducer
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export const StoreProvider: React.FC = ({children}) => {
    return (
        <Provider store={store}> 
            {children}
        </Provider>
    ); 
};

