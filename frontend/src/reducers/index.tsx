import { combineReducers } from 'redux';
import SelectReducer from './reducer-movie-select';
import FilterReducer from './reducer-movie-filter';
import SearchReducer from './reducer-movie-search';


const allStates = combineReducers({
    select: SelectReducer,
    search_string: SearchReducer,
    filter_params: FilterReducer
});

export default allStates;