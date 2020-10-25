import { observable, action, computed, reaction } from "mobx"
import React from "react";
import { createContext } from "react"

export interface IStates {
    search_string: string;
    select_id: string;
    filter_field: string;
    filter_equal_to: boolean,
    filter_greater_than: boolean,
    filter_less_than: boolean
}

class Store {
    /*constructor() {
        reaction(() => this.search_string, _ => console.log(this.search_string))
    }
*/
    // Observable state handlers
    @observable select_id = "";

    @observable search_string = "";

    //@observable filter_field: "", filter_equal_to: false, filter_greater_than: false, filter_less_than: false

    // Actions:
    @action updateSearch = (search: string) => {
        this.search_string = search;
        console.log("Search updated to: " + this.search_string);
    }

    @action updateSelect = (selection: string) => {
        this.select_id = selection;
        console.log("Selection updated to: " + this.select_id);
    }
}


export default createContext(new Store())