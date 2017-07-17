import { Action } from "redux";
import { StoreActions } from "./";
import { AppStore } from "../store";

export interface UserMessagesAction extends Action {
    messages: any[]
}

const createMessagesFetchRequestAction: () => UserMessagesAction = () => {
    console.log("FETCHING MESSAGES FROM SERVER")
    return {
        type: StoreActions.MESSAGES_FETCH_REQUEST,
        messages: []
    }
}

const createMessagesFetchSuccessAction: (messages: any[]) => UserMessagesAction = (messages) => ({
    type: StoreActions.MESSAGES_FETCH_SUCCESS,
    messages
})

export const fetchMessages = () => {
AppStore.dispatch(createMessagesFetchRequestAction());
// is AppStore.dispatch({type:"MESSAGES_FETCH_REQUEST", messages: []})
fetch(`http://localhost:8080/messages`)
.then((res:any) => res.json())
.then((messages:any[]) => {
    //receive messages from resource and pass to action
    AppStore.dispatch(createMessagesFetchSuccessAction(messages))
});
}
