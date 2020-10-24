import { observable, action, computed, reaction } from "mobx"
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
    constructor() {
        reaction(() => this.states, _ => console.log(this.states))
    }

    // Observable state handler
    @observable states: IStates[] = [
        { search_string: "", select_id: "", filter_field: "", filter_equal_to: false, filter_greater_than: false, filter_less_than: false }
    ]

    // Getter
    @computed get getState() {
        return this.states;
    }

    // Actions:
    @action updateSearch = (search: string) => {
        this.states[0].search_string = search;
        console.log("Search updated to: " + this.states[0].search_string);
    }

    @action updateSelect = (selection: string) => {
        this.states[0].select_id = selection;
        console.log("Selection updated to: " + this.states[0].select_id);
    }

}

export default createContext(new Store())