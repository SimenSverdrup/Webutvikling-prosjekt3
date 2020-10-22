import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { SEARCH, FILTER, SELECT, ActionTypes , AllStates} from './types';

const initialState: any = {
    search_string: ""
};

export function reducer(
    state = initialState,
    action: ActionTypes
): any {
    switch (action.type) {
        case "SEARCH": {
            return {
                search_string: action.payload.search_string
            }
        }
        case "SELECT": {
            return;
        }
        case "FILTER": {
            return;
        }
        default: {
            return state;
        }
    }
}


/*
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

