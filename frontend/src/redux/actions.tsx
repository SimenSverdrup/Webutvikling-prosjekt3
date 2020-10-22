import { ActionTypes, SEARCH, SELECT, FILTER } from "./types";


export function searchTitle(search_string: { search_string: string }) {
    return {
        type: SEARCH,
        payload: search_string
    }
}

