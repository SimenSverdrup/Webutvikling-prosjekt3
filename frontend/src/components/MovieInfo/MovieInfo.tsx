import React, {useContext, useEffect, useState} from 'react';
import './MovieInfo.css';
import { observer } from "mobx-react"
import Store from '../../mobx/store'

const initialMovie = {
    _id: "",
    title: "",
    duration: "",
    genres: ["", ""],
    year: "",
    actors: ["", ""],
    storyline: "",
    imdbRating: "",
    posterurl: ""
}

const MovieInfo = () => {
    const store = useContext(Store);
    const { select_id } = store;
    const [id, setId] = useState(select_id);
    const [movie, setMovie] = useState(initialMovie);

    let duration = "Unknown";

    useEffect( () => {
        setId(select_id);
        fetch("http://localhost:3000/api/id/" + id)
            .then( res => res.json())
            .then( mov => {
                setMovie(mov);
            })
            .catch( error => {
                console.log('Could not get selected movie from DB');
            });
    }, [movie, select_id]);

    duration = movie["duration"]
    duration = duration.slice(2);
    duration = duration.substring(0, duration.length - 1);
    duration += " min";

    return (
        <div id="movieInfo">
            <h3 id={movie["_id"]}>{movie["title"]}</h3>
            <hr/>
            <img id={movie["_id"]} src={movie["posterurl"]} alt="Missing poster" width="170" height="240"/>
            <p className="movieInfo">Year: {movie["year"]}</p>
            <p className="movieInfo">Duration: {duration}</p>
            <p className="movieInfo">Genres: {movie["genres"].join(', ')}</p>
            <p className="movieInfo">Main actors: {movie["actors"].join(', ')}</p>
            <p className="movieInfo">Storyline: {movie["storyline"]}</p>
            <p id="rateInfo">Rate this movie:</p>
            <input placeholder="1-10"></input>
            <p id="userRating">User-rating: None yet</p>
            {/** Bruker getElementById(userRating).innerText("...") eller
             * getElementById(userRating).innerHtml("...") i js for å endre hva som står her.
             * Eller nei, kom på at man kanskje bruker props, hehehe */}
             <p className="movieInfo">IMDB rating: {movie["imdbRating"]? movie["imdbRating"] + "/10" : "Unknown" }</p>
        </div>
    )
}

export default observer(MovieInfo);