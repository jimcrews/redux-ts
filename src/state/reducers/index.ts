import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
    repositories: repositoriesReducer
});

export default reducers;

// get typescript to understand Redux state types
export type RootState = ReturnType<typeof reducers>;