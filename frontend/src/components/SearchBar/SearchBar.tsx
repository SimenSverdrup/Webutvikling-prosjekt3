import React, {useContext, useState }from 'react';
import './SearchBar.css';
import { observer } from "mobx-react-lite"
import Store from '../../mobx/store';
import MenuListComposition from "../../components/Dropdown/DropdownFilter";
import MenuListComposition1 from "../../components/Dropdown/DropdownSort";



const SearchBar = () => {
    const store = useContext(Store);
    const { updateSearch } = store;

    return (
        <div id="searchBar_grid_container">
            <div className="searchBar_grid">
                <input type="text" placeholder="Search" onInput={(element) => {
                    //use action here, to set search string state in the store
                    // this will trigger a re-render of MovieList automatically
                    updateSearch(element.currentTarget.value);
                    }}/>
                <div id="searchBar_sort" onClick={() => {/* På klikk vil jeg åpne dropdown for sortering */}}>
                    <MenuListComposition1/>
                    {/*<img src="" alt="Dropdown icon"/>*/}
                </div>
                <div id="searchBar_filter" onClick={() => {/* På klikk vil jeg åpne dropdown for filtrering */}}>
                    {/*<img src="" alt="Filter icon"/>*/}
                    {/*<img src="" alt="Dropdown icon"/>*/}
                    <MenuListComposition/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
