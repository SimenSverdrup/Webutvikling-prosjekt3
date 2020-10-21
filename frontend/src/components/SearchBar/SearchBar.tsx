import React from 'react';
import './SearchBar.css';

//lag en fuksjon her som bruker fetch (itl databasen), men bare lær deg fetch først
// se påtutorial for fetch (=biblioteksfunksjon for å hente data fra database elelr fra nettet osv).



export default function Title() {
    return (
        <div id="searchBar_grid_container">
            <div className="searchBar_grid">
                <input type="text" placeholder="Search" onInput={() => {/* Ved søk skal jeg kalle funksjonen jeg lager ovenfor */}}/>
                <div id="searchBar_sort" onClick={() => {/* På klikk vil jeg åpne dropdown for sortering */}}>
                    <p>Sort v</p>
                    {/*<img src="" alt="Dropdown icon"/>*/}
                </div>
                <div id="searchBar_filter" onClick={() => {/* På klikk vil jeg åpne dropdown for filtrering */}}>
                    {/*<img src="" alt="Filter icon"/>*/}
                    {/*<img src="" alt="Dropdown icon"/>*/}
                    <p>Filter v</p>      
                </div>
            </div>
        </div>
    )
}
