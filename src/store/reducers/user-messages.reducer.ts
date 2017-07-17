import { Reducer } from "redux";
import { AppState } from "../store";
import { StoreActions, UserMessagesActions } from "../actions";


export const UserMessagesReducer: Reducer<any[]> = (state: any[] = [], action: UserMessagesActions.UserMessagesAction) => {
    const ACTION_TYPES : any = {
        "MESSAGES_FETCH" : () => {
            //instead of spread operator
            // return Object.assign({}, state, {likes: state.likes + action.value})
            return state.concat(action.messages)
        },
        "MESSAGES_FETCH_REQUEST": () => {
            return state.concat(action.messages)
        },
        "MESSAGES_FETCH_SUCCESS": () => {
            return state.concat(action.messages)
        },
        "DEFAULT": () => {
            return state;
        },
    };
    const ACTION_KEY = (ACTION_TYPES.hasOwnProperty(action.type)) ? action.type : "DEFAULT"

    return ACTION_TYPES[ACTION_KEY]();
}
