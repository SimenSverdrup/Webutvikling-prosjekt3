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

export default function MovieBox(props:Props) {
    
    return (
        <div id="movieInfo">
            <h3 id="movieInfoTitle">{props.movieTitle}</h3>
            <hr/>
            <p className="movieInfoP">Duration: {props.duration}</p>
            <p className="movieInfoP">Genre: {props.genre}</p>
            <p className="movieInfoP">Directors: {props.directors}</p>
            <p className="movieInfoP">Main actors: {props.actor1}, {props.actor2}, {props.actor3}</p>
        </div>
    )
}