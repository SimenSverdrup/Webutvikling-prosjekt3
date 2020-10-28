import React, {useContext, useEffect, useState} from 'react';
import MovieBox from '../MovieBox/MovieBox';
import { observer } from 'mobx-react';
import Store from '../../mobx/store';



const MovieList = () => {
    //const [numberOfMovies, setNumberOfMovies] = useState(5);
    const [movies, setMovies] = useState([]);
    const store = useContext(Store);
    const { search_string } = store;


    useEffect( () => {
        if (search_string) {
            // non-empty search string -> search for the specified title
             fetch("http://localhost:3000/api/movies/title/" + search_string,
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
    }, [search_string, movies]);


    return(
        <div id="movieList">
            { movies.map( movie =>
                <ul key={movie["_id"]}>
                    <MovieBox id={movie["_id"]} title={movie["title"]}
                              duration={movie["duration"]}
                              genres={movie["genres"]}
                              imgUrl={movie["posterurl"]}
                              year={movie["year"]}
                              imdbRating={movie["imdbRating"]}
                    />
                </ul>
            )}
        </div>
    )
}


export default observer(MovieList);