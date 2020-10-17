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
            let duplicateArray = [...state.rightList];
            if(duplicateArray[action.index] !== undefined){
                duplicateArray[action.index].names.push(action.name);
            }
            else{
                duplicateArray[action.index] = {
                    Title: action.country,
                    names: [action.name]
                };
            }
            return{
                ...state,
                rightList: duplicateArray,
            }

        case REMOVE_FROM_RIGHT: 
            let copiedArray = [...state.rightList];
            let namesArray = copiedArray[action.index].names;
            const filteredArray = namesArray.filter(
                   name => name !== action.name 
            );
            if(filteredArray.length !== 0){
                copiedArray[action.index] = {
                    Title: action.country,
                    names: filteredArray
                }
            }else{
                copiedArray[action.index] = {
                    names: filteredArray
                }
            }
            return{
                ...state,
                rightList: copiedArray,
            }
        default: 
            return state;
    }
}