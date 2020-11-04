import React, {useContext, useEffect, useState} from 'react';
import MovieBox from '../MovieBox/MovieBox';
import { observer } from 'mobx-react';
import Store from '../../mobx/store';
import './MovieList.css';
import '../MovieBox/MovieBox.css';
import Paginater from "../Paginater/Paginater";



const MovieList = () => {
    const [numberOfMovies, setNumberOfMovies] = useState(5);
    const [movies, setMovies] = useState([]);
    const [genreChoice, setGenre] = useState("");
    const store = useContext(Store);
    const { search_string, genre, sort, page } = store;


    useEffect( () => {
        if (genre !== "*") {
            let temp_search_string = search_string === "" ? "*" : search_string;
            console.log("update genre")
            fetch("http://localhost:3000/api/movies/genre/" + temp_search_string + '/' + genre + '/' + sort + '/' + page,
                {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(json => {
                    setMovies(json);
                    setGenre(genre);
                })
                .catch(error => {
                    console.log('Could not get movies from DB');
                });
        }
        else {
            if (search_string) {
                // non-empty search string -> search for the specified title
                fetch("http://localhost:3000/api/movies/title/" + search_string + '/' + sort + '/' + page,
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
                fetch("http://localhost:3000/api/movies/" + sort + '/' + page,
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
        }
    }, [search_string, movies, genre, sort, page]);


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