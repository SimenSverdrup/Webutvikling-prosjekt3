import React, { Component } from 'react';
import './App.css';
import MovieInfo from './components/MovieInfo/MovieInfo';
import SearchBar from './components/SearchBar/SearchBar';
import Title from './components/Title/Title';
import MovieList from "./components/MovieList/MovieList";


class App extends Component {
    render() {
        return (
            <div>
                <Title/>
                <div id="grid_container">
                    <SearchBar/>
                    <MovieList/>
                    <MovieInfo/>
                </div>
                <Paginater/>
            </div>
        );
    }
}

export default App;
