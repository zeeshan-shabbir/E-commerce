
import Data from "../Assets/Data/Data.js"
console.log(Data,"data");

export let data = {
    snacks: 'Rio',
    drink: 'Coffee',

}

export function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_SNACK": {
            return {
                ...state,
                snacks: action.payload
            }
        }
        default:
            return state;

    }
}