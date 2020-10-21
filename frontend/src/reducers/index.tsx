import { combineReducers } from 'redux';
import SelectReducer from './SelectReducer';
import FilterReducer from './FilterReducer';
import SearchReducer from './SearchReducer';


const allStates = combineReducers({
    select: SelectReducer,
    search_string: SearchReducer,
    filter_params: FilterReducer
});

export default allStates;