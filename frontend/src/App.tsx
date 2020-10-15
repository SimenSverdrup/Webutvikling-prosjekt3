import React from 'react';
import './App.css';
import MovieBox from './components/MovieBox/MovieBox';
import MovieInfoBox from './components/MovieInfo/MovieInfo';
import SearchBar from './components/SearchBar/SearchBar';
import Title from './components/Title/Title';
import WatchListInfoBox from './components/WatchList/WatchList';

function App() {
  return (
    <div>
      <Title></Title>
      <div id="grid_container">
        <SearchBar></SearchBar>
        <MovieBox imgUrl="avengers.png" movieTitle={'Avengers: Endgame'} duration={"3 hours 1 min"} genre={"Action, Adventure, Drama"}></MovieBox>
        <MovieBox imgUrl="avengers.png" movieTitle={'Titanic'} duration={"2 hours 4 min"} genre={"Action, Romantic, Drama"}></MovieBox>
        <MovieBox imgUrl="avengers.png" movieTitle={'Avengers: Endgame'} duration={"3 hours 1 min"} genre={"Action, Adventure, Drama"}></MovieBox>
        <WatchListInfoBox></WatchListInfoBox>
        <MovieInfoBox movieTitle={'Avengers: Endgame'} duration={"3 hours 1 min"} genre={"Action, Adventure, Drama"} directors={"Anthony Russo, Joe Russo"} actor1={"Ola"} actor2={"Kari"} actor3={"Jens"}></MovieInfoBox>
      </div>
    </div>
    // Hvor mange movieBox'er skal jeg ha? Dette kommer jo an på søkeresultatet.
    // Hvordan kobler jeg html'en opp til søkeresultatet?
    // - det skal være en funksjon eller lignende som generer slike MovieBoxer ut i fra søkeresultatet
  );
}

export default App;
