import React, {useContext, useState} from 'react';
import './MovieInfo.css';
import { observer } from "mobx-react-lite"
import Store from '../../mobx/store'


const MovieInfo = () => {
    const [id, setId] = useState("");
    const store = useContext(Store);
    const { states } = store;

    setId(states[0].select_id);

    let movie = fetch("http://localhost:3000/api/movies/" + id)
        .then( res => res.json())
        .catch( error => {
            console.log('Could not get selected movie from DB');
            return {
                title: '',
                duration: 0,
                genres: [],
                year: 0,
                actors: [],
                storyline: '',
                imdbRating: 0
            }
        });

    return (
        <div></div>
        /*
        <div id="movieInfo">
            <h3 id="movieInfoTitle">{movie.title}</h3>
            <hr/>
            <p className="movieInfo">Duration: {movie.duration}</p>
            <p className="movieInfo">Genre: {movie.genres}</p>
            <p className="movieInfo">Year: {movie.year}</p>
            <p className="movieInfo">Main actors: {movie.actors}</p>
            <p className="movieInfo">Storyline: {movie.storyline}</p>
            <p className="movieInfo">IMDB rating: {movie.imdbRating}</p>
        </div>
        */
    )
}

export default observer(MovieInfo);