import React, {useContext, useEffect, useState} from 'react';
import MovieBox from '../MovieBox/MovieBox';
import {observer, Provider} from "mobx-react"
import Store from '../../mobx/store'
import {get} from "mobx";
import {useForceUpdate} from "mobx-react-lite/dist/utils/utils";


const MovieList = () => {
    //const [numberOfMovies, setNumberOfMovies] = useState(5);
    const [movies, setMovies] = useState([]);
    const store = useContext(Store);
    const { states, getState } = store;


    useEffect( () => {
        console.log("Search string is now: " + states[0].search_string);
        if (states[0].search_string) {
            // non-empty search string -> search for the specified title
            console.log("non-empty search string: " + states[0].search_string);

             fetch("http://localhost:3000/api/movies/title/" + states[0].search_string,
                {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(json => {
                    setMovies(json);
                })
                .catch(error => {
                    console.log('Could not get movies from DB');
                });
        }
        else {
            // empty search string -> get all movies
            console.log("empty search string");

             fetch("http://localhost:3000/api/movies/",
                {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(json => {
                    setMovies(json);
                })
                .catch(error => {
                    console.log('Could not get movies from DB');
                });
        }
    }, [states, getState]);


    return(
        <div>
            { movies.map( movie =>
                <ul key={movie["_id"]}>
                    <MovieBox id={movie["_id"]} title={movie["title"]}
                              duration={movie["duration"]}
                              genres={movie["genres"]}
                              imgUrl={movie["posterurl"]}
                              year={movie["year"]}
                              imdbRating={movie["imdbRating"]}/>
                </ul>
            )}
        </div>
    )
}


export default observer(MovieList);