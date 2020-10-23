import React, {useContext, useEffect, useState} from 'react';
import MovieBox from '../MovieBox/MovieBox';
import { observer } from "mobx-react-lite"
import Store from '../../mobx/store'


const MovieList = () => {
    const startState = [{
        title: "",
        year: 0,
        genres: [],
        storyline: "",
        posterurl: "",
        imdbRating: 0,
        actors: [],
        rating: 0
    }];

    const [numberOfMovies, setNumberOfMovies] = useState(5);
    const [movies, setMovies] = useState(startState);
    const store = useContext(Store);
    const { states } = store;

    useEffect( () => {
        const fetchDataAsync = async () => {
            if (states[0].search_string) {
                // non-empty search string -> search for the specified title
                console.log("non-empty string: " + states[0].search_string);

                await fetch("http://localhost:3000/api/movies/title/" + states[0].search_string,
                    {
                        method: 'GET'
                    })
                    .then(res => res.json())
                    .then(movies => setMovies(movies))
                    .catch(error => {
                        console.log('Could not get movies from DB');
                    });
                let res = fetchDataAsync();
            }
            else {
                // empty search string -> get all movies
                console.log("empty string: " + states[0].search_string)

                await fetch("http://localhost:3000/api/movies/",
                    {
                        method: 'GET'
                    })
                    .then(res => res.json())
                    .then(movies => setMovies(movies))
                    .catch(error => {
                        console.log('Could not get movies from DB');
                    });
            }
        }
        let movies = fetchDataAsync();




        if (states[0].search_string) {
            // non-empty search string -> search for the specified title
            console.log("non-empty string: " + states[0].search_string);
            const fetchDataAsync = async () => {
                await fetch("http://localhost:3000/api/movies/title/" + states[0].search_string,
                    {
                        method: 'GET'
                    })
                    .then(res => res.json())
                    .then(movies => setMovies(movies))
                    .catch(error => {
                        console.log('Could not get movies from DB');
                    });
            }
            let res = fetchDataAsync();
        }
        else {
            // empty search string -> get all movies
            console.log("empty string: " + states[0].search_string)
            const fetchDataAsync = async () => {
                await fetch("http://localhost:3000/api/movies/",
                    {
                        method: 'GET'
                    })
                    .then(res => res.json())
                    .then(movies => setMovies(movies))
                    .catch(error => {
                        console.log('Could not get movies from DB');
                    });
            }
            let res = fetchDataAsync();
        }
        console.log(movies);
    }, []);

    return(
        <div>
            {/* movies.map( movie =>
                <li key={movie.title}>
                    <MovieBox id={movie._id} movieTitle={movie.title} duration={movie.duration} genres={movie.genres} imgUrl={movie.posterurl} year={movie.year}/>
                </li>
            )
            */}
        </div>
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