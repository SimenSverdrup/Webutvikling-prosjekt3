import React from 'react';
import './MovieBox.css';

interface Props {
    movieTitle: string;
    duration: string;
    genres: string;
    imgUrl: string;
    year: number;
    //rating: number; // denne viser vi ikke per nå
}

export default function MovieBox(props:Props) {
    return (
        <div className="movieBox" onClick={() => {/* På klikk vil jeg displaye movieInformation, altså sette select staten */}}>
            <div id="movieBox_grid">
                <img id="movieBox_cover" src={props.imgUrl} alt="Movie cover"/>
                <h3>{props.movieTitle}</h3>
                <img id="movieBox_icon" src="../images/favourite.png" alt="Favourite icon"/>
                <p>Duration: {props.duration}</p>
                <p>Genre: {props.genres}</p>
                <p>Year: {props.year.toString()}</p>
            </div>
        </div>
    )
}