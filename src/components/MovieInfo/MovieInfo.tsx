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
            <h3>{props.movieTitle}</h3>
            <hr/>
            <p>Duration: {props.duration}</p>
            <p>Genre: {props.genre}</p>
            <p>Directors: {props.directors}</p>
            <p>Main actors: {props.actor1}, {props.actor2}, {props.actor3}</p>
        </div>
    )
}