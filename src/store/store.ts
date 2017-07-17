import { Action, Reducer, createStore, Store, combineReducers, ReducersMapObject } from "redux";
import { UserLikesReducer, UserMessagesReducer } from "./reducers"
import { createUserLikeAction, UserMessagesActions } from "./actions";
export interface AppState {
    title: string;
    likes: number;
    messages: any[];
    ui: {[key:string] : any},
    users: any[];
    session: any
}

const reducerStateMap: ReducersMapObject = {
    userlikedata: UserLikesReducer,
    usermessagesdata: UserMessagesReducer
};

export const AppStore : Store<AppState> = createStore<AppState>(combineReducers<AppState>(reducerStateMap));

AppStore.subscribe(() => {
    console.log("ACTON DISPATCHED, STATE WAS REDUCED");
    console.log(AppStore.getState());
})


AppStore.dispatch(createUserLikeAction(2));
AppStore.dispatch(createUserLikeAction(2));
AppStore.dispatch(createUserLikeAction(2));
