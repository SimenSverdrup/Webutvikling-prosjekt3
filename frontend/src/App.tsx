import React, { Component } from 'react';
import './App.css';
import MovieInfo from './components/MovieInfo/MovieInfo';
import SearchBar from './components/SearchBar/SearchBar';
import Title from './components/Title/Title';
import MovieList from "./components/MovieList/MovieList";
import MenuListComposition from "./components/Dropdown/Dropdown";


class App extends Component {
    render() {
        return (
            <div>
                <Title/>
                <div id="grid_container">
                    <SearchBar/>
                    {/*<MenuListComposition/>*/}
                    <MovieList/>
                    <MovieInfo/>
                </div>
            </div>
            // Hvor mange movieBox'er skal jeg ha? Dette kommer jo an på søkeresultatet.
            // Hvordan kobler jeg html'en opp til søkeresultatet?
            // - det skal være en funksjon eller lignende som generer slike MovieBoxer ut i fra søkeresultatet
        );
    }
}

export default App;
