import {ADD_LIST, ADD_TO_RIGHT, REMOVE_FROM_RIGHT} from '../actions';

const initialNameState = {
    leftList: [],
    rightList: []
}

export default function countryList(state=initialNameState, action){
    switch(action.type){
        case ADD_LIST: 
            return{
                ...state,
                leftList: action.names
            }
        case ADD_TO_RIGHT:
            return{
                ...state,
                rightList: [action.name, ...state.rightList]
            }

        case REMOVE_FROM_RIGHT: 
            const filteredArray = state.rightList.filter(
                item => item.names.filter(
                   name => name !== action.name 
                )
            );
            return{
                ...state,
                rightList: filteredArray,
            }
        default: 
            return state;
    }
}