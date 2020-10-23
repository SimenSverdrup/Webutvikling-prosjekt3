import React, {useContext, useState } from 'react';
import MovieBox from '../MovieBox/MovieBox';
import { observer } from "mobx-react-lite"
import Store from '../../mobx/store'
import axios from 'axios';


const MovieList = () => {
    const [numberOfMovies, setNumberOfMovies] = useState(5);
    const store = useContext(Store);
    const { states } = store;


    if (states[0].search_string) {
        // non-empty search string -> search for the specified title
        console.log("non-empty string: " + states[0].search_string);
        let movies = fetch("http://localhost:3000/api/movies/title/" + states[0].search_string, {
            headers: {
                'Origin': 'http://localhost:3000'
            }
            })
            .then( res => res.json())
            .catch( error => {
                console.log('Could not get movies from DB');
            });
    }
    else {
        // empty search string -> get all movies
        console.log("empty string: " + states[0].search_string)
        let movies = fetch("http://localhost:3000/api/movies/")
            .then( res => res.json())
            .catch( error => {
                console.log('Could not get movies from DB');
            });
        console.log(JSON.stringify(movies));
    }


    return(
        <div></div>
        /*
        { movies.map( movie =>
                <li key={movie.title}>
                    <MovieBox id={movie._id} movieTitle={movie.title} duration={movie.duration} genres={movie.genres} imgUrl={movie.posterurl} year={movie.year}/>
                </li>
        )
        }
        */
    )
}


export default observer(MovieList);

/*
import {bindActionCreators, Dispatch} from 'redux';
import { connect, ConnectedProps } from 'react-redux'
import { State } from '../../index'

import { observer } from "mobx-react-lite"
import Store from '../../mobx/store'



const mapState = (state: State) => ({
    search_string: ""
})

const mapDispatch = {
    updateSearch: (search_string: string) => ({ type: search_string})
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
    search_string: string
}





// Denne funksjonen tar inn state (en bit av redux) og sender
// det til komponenten din som en props
function mapStateToProps(state: State) {
    return {
        search_string: state.search_string,
        filter_params: state.filter_params
    };
}


export default connector(MovieList);


 */