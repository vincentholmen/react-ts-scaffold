import { Reducer } from "redux";
import { AppState } from "../store";
import { StoreActions, UserLikeAction } from "../actions";

export const UserLikesReducer: Reducer<number> = (state: number = 0, action: UserLikeAction) => {
    const ACTION_TYPES : any = {
        "LIKE_ADD" : () => {
            //instead of spread operator
            // return Object.assign({}, state, {likes: state.likes + action.value})
            return state + action.value;
        },
        "LIKE_REMOVE" : () => {

            return state - action.value;
        },
        "DEFAULT": () => {
            return state;
        },
    };
    const ACTION_KEY = (ACTION_TYPES.hasOwnProperty(action.type)) ? action.type : "DEFAULT"
    console.log(ACTION_TYPES)
    return ACTION_TYPES[ACTION_KEY]();
};
