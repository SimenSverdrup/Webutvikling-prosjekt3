import React from 'react';
import './MovieInfo.css';

interface Props {
    movieTitle: string;
    duration: string;
    genres: string;
    imgUrl: string;
    year: number;
    actor1: string;
    actor2: string;
    actor3: string;
    storyline: string;
    imdbRating: number;
}

export default function MovieInfo(props:Props) {
    return (
        <div id="movieInfo">
            <h3 id="movieInfoTitle">{props.movieTitle}</h3>
            <hr/>
            <p className="movieInfo">Duration: {props.duration}</p>
            <p className="movieInfo">Genre: {props.genres}</p>
            <p className="movieInfo">Year: {props.year}</p>
            <p className="movieInfo">Main actors: {props.actor1}, {props.actor2}, {props.actor3}</p>
            <p className="movieInfo">Storyline: {props.storyline}</p>
            <p className="movieInfo">IMDB rating: {props.imdbRating}</p>
        </div>
    )
}