import {combineReducers} from 'redux';
import moviesReducer from './reducer-movies';

const allMovies = combineReducers({
    movies: moviesReducer //nå er alt innholdet i reduceren innholdt i "movies"-objektet/variabelen
});

export default allMovies;