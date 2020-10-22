export const SEARCH = 'SEARCH';
export const SELECT = 'SELECT';
export const FILTER = 'FILTER';


interface SearchAction {
    type: typeof SEARCH
    payload: {
        search_string: string
    }
}

interface SelectAction {
    type: typeof SELECT
    payload: {
        id: string
    }
}

interface FilterAction {
    type: typeof FILTER
    payload: {
        field: string,
        equal_to: boolean,
        greater_than: boolean,
        less_than: boolean
    }
}

export interface AllStates {
    search: SearchAction,
    filter: FilterAction,
    select: SelectAction
}


export type ActionTypes = SearchAction | SelectAction | FilterAction;