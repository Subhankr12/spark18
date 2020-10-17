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
            let duplicateArrayLeft = [...state.leftList];
            if(duplicateArray[action.index] !== undefined){
                    let myobj = {
                        name: action.name,
                        checked: true,
                    }
                    duplicateArray[action.index].names.push(myobj);  
            }
            else{
                duplicateArray[action.index] = {
                    Title: action.country,
                    names: [{
                        name: action.name,
                        checked: true,
                    }]
                };
            }

            let leftIndex = duplicateArrayLeft[action.index].names.findIndex((name) => name.name === action.name);
            duplicateArrayLeft[action.index].names[leftIndex].checked = true;
            return{
                ...state,
                rightList: duplicateArray,
                leftList: duplicateArrayLeft,
            }

        case REMOVE_FROM_RIGHT: 
            let copiedArray = [...state.rightList];
            let copiedArrayLeft = [...state.leftList];
            let namesArray = copiedArray[action.index].names;
            const filteredArray = namesArray.filter(
                   name => name.name !== action.name 
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

            let leftindx = copiedArrayLeft[action.index].names.findIndex((name) => name.name === action.name);
            copiedArrayLeft[action.index].names[leftindx].checked = false;
            return{
                ...state,
                rightList: copiedArray,
                leftList: copiedArrayLeft,
            }
        default: 
            return state;
    }
}