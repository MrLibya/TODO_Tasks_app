import { createStore, createHook } from 'react-sweet-state';
import { StoreState } from '../types/items';
import todoActions from './actions/todo.actions';

const initialState:StoreState = {
    todoList: [],
};


const actions = {
    ...todoActions
};

const Store = createStore({ initialState, actions });

export const useStore = createHook(Store);
