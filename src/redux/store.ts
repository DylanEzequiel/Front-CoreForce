import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import loginReducer from './login/login.reducer';


export interface RootState {
      loginReducer:ReturnType<typeof loginReducer>
}

const store = createStore(combineReducers<RootState>({
      loginReducer
}), composeWithDevTools(applyMiddleware(thunk)))

    
    export default store;

