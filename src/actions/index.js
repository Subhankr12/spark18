export const ADD_LIST = 'ADD_LIST';
export const ADD_TO_RIGHT = 'ADD_TO_RIGHT';
export const REMOVE_FROM_RIGHT = 'REMOVE_FROM_RIGHT';


export function addList (names){
    return{
        type: ADD_LIST,
        names
    }
}
export function addToRight(name){
    return {
        type: ADD_TO_RIGHT,
        name
    }
}

export function removeFromRight(name){
    return {
        type: REMOVE_FROM_RIGHT,
        name
    }
}
