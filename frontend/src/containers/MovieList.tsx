import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MovieBox from '../components/MovieBox/MovieBox';
import allMovies from '../reducers';

class MovieList extends Component {
    
    // Hvis vi tenker på movie-infoen, så er det egentlig én spesifikk movie og dens verdier/attributter
    // jeg vil displaye. Men dette vil jeg også at skal kalles ved en onClick på filmelementet, så jeg
    // vet ikke hvordan jeg kobler sammen redux med onclick.

    // Denne funksjonen lager en liste med alle filmene som er i store. Men jeg vet ikke om jeg skal
    // gjøre det eller om vi skal bruke en annen måte siden vi har database.
    // SPM: Hva referer "this" til? Hva gjør egentlig s
    
    // Kommenterer ut for at programmet skal kunne kjøre
    /*createListItems() {
        return this.props.movies.map((movie) => {
            return (
                <MovieBox movieTitle={movie.title}
                            duration={movie.duration}
                            genre={movie.genre}>
                </MovieBox>
            );
        });
    }
    
    
    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }*/
}

// Denne funksjonen tar inn state (en bit av store) og sender
// det til komponenten din som en props
function mapStateToProps(state: any) {
    return {
        movies: state.movies
    };
}

// Når vi connecter movieInfo og mapStateToProps sånn som dette så
// sørger vi for at movieInfo vet om mapStateToProps
export default connect(mapStateToProps)(MovieList);