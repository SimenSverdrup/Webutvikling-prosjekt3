import React from 'react';
import './App.css';
import MovieBox from './components/MovieBox/MovieBox';
import MovieInfo from './components/MovieInfo/MovieInfo';
import SearchBar from './components/SearchBar/SearchBar';
import Title from './components/Title/Title';
import MovieList from "./components/MovieList/MovieList";


function App() {
  return (
    <div>
      <Title/>
      <div id="grid_container">
        <SearchBar />
        <MovieList />
        {/*<WatchListInfoBox></WatchListInfoBox>*/}
        {/*<MovieInfo movieTitle={'Avengers: Endgame'} duration={"3 hours 1 min"} genres={"Action, Adventure, Drama"} directors={"Anthony Russo, Joe Russo"} actor1={"Ola"} actor2={"Kari"} actor3={"Jens"}></MovieInfo>*/}
      </div>
    </div>
    // Hvor mange movieBox'er skal jeg ha? Dette kommer jo an på søkeresultatet.
    // Hvordan kobler jeg html'en opp til søkeresultatet?
    // - det skal være en funksjon eller lignende som generer slike MovieBoxer ut i fra søkeresultatet
  );
}

export default App;
