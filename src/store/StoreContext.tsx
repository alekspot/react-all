import * as React from 'react';
import {TodoStore} from './TodoStore';

const stores = {
    todoStore: new TodoStore
};

const Context = React.createContext(stores);

export const StoreProvider: React.FC = ({children}) => {
    
    return <Context.Provider value={stores}>{children}</Context.Provider>;
};

const useStore: () => typeof stores = () => React.useContext(Context);


export const useTodoStore = (): TodoStore => useStore().todoStore;