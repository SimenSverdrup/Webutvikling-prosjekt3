import React from 'react';
import './MovieInfo.css';

interface Props {
    movieTitle: string;
    duration: string;
    genre: string;
    directors: string;
    actor1: string;
    actor2: string;
    actor3: string;
}

export default function MovieInfo(props:Props) {
    
    return (
        <div id="movieInfo">
            <h3 id="movieInfoTitle">{props.movieTitle}</h3>
            <hr/>
            <p className="movieInfo">Duration: {props.duration}</p>
            <p className="movieInfo">Genre: {props.genre}</p>
            <p className="movieInfo">Directors: {props.directors}</p>
            <p className="movieInfo">Main actors: {props.actor1}, {props.actor2}, {props.actor3}</p>
        </div>
    )
}