import React, { Component } from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import { connect, ConnectedProps } from 'react-redux'
import MovieBox from '../MovieBox/MovieBox';
import { reducer } from '../../redux/reducers'
import { State } from '../../redux'


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


const MovieGetter = (props: Props) => {
     fetch("localhost:3000/api/movies/title/" + props.search_string)
        .then( (res) => {
                res.json();
            })
         .then( (movies) => { return movies; }
         )
}

const MovieList = (props: Props) => {
    let movies = MovieGetter(props);

    return(
        <ul>
            {movies.map( (movie) => {
            <MovieBox movieTitle={movie.title}
                      duration={movie.duration}
                      genres={movie.genres}
                      imgUrl={movie.posterurl}
                      year={movie.year}/>
            }
        )}
        </ul>
    )
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