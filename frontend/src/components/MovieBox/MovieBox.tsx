import React, {useContext, useState} from 'react';
import './MovieBox.css';
import { observer } from "mobx-react-lite"
import Store from '../../mobx/store'

interface Props {
    id: string;
    movieTitle: string;
    duration: string;
    genres: string;
    imgUrl: string;
    year: number;
    //rating: number; // denne viser vi ikke per nå
}

const MovieBox = (props:Props) => {
    const store = useContext(Store);
    const { updateSelect } = store;

    return (
        <div className="movieBox" onClick={() => {
            /* På klikk vil jeg displaye movieInformation, altså sette select staten */
            updateSelect(props.id);
        }}>
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

export default observer(MovieBox);