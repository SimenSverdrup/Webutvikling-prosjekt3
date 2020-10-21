import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MovieBox from '../components/MovieBox/MovieBox';
import allStates from "../reducers/index";

class MovieList extends Component {
    
    // Hvis vi tenker på movie-infoen, så er det egentlig én spesifikk movie og dens verdier/attributter
    // jeg vil displaye. Men dette vil jeg også at skal kalles ved en onClick på filmelementet, så jeg
    // vet ikke hvordan jeg kobler sammen redux med onclick.

    // Denne funksjonen lager en liste med alle filmene som er i store. Men jeg vet ikke om jeg skal
    // gjøre det eller om vi skal bruke en annen måte siden vi har database.
    // SPM: Hva referer "this" til? Hva gjør egentlig s
    
    // Kommenterer ut for at programmet skal kunne kjøre

    createListItems() {
        let movies = fetch("localhost:3000/api/movies/title/" + this.props.search_string);


        return {

        }
    }
    
    
    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

// Denne funksjonen tar inn state (en bit av store) og sender
// det til komponenten din som en props
function mapStateToProps(state: typeof allStates) {
    return {
        search_string: state.search_string,
        filter_params: state.filter_params
    };
}

// Når vi connecter movieInfo og mapStateToProps sånn som dette så
// sørger vi for at movieInfo vet om mapStateToProps
export default connect(mapStateToProps)(MovieList);