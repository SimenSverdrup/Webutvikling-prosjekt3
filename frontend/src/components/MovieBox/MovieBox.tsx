import React from 'react';
import './MovieBox.css';

interface Props {
    movieTitle: string;
    duration: string;
    genre: string;
    //imgUrl: string;
    //directors: string;
}

export default function MovieBox(props:Props) {
    
    return (
        <div className="movieBox" onClick={() => {/* På klikk vil jeg displaye movieInformation */}}>
            <div id="movieBox_grid">
                {/*<img id="movieBox_cover" src={props.imgUrl} alt="Movie cover"/>*/}
                <h3>{props.movieTitle}</h3>
                <img id="movieBox_icon" src="../images/favourite.png" alt="Faviourite icon"/>
                <p>Duration: {props.duration}</p>
                <p>Genre: {props.genre}</p>
                {/*<p>Directors: {props.directors}</p>*/}
            </div>
        </div>
    )
}