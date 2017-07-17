import { Action, Reducer, createStore, Store, combineReducers, ReducersMapObject } from "redux";

declare var fetch: any;

//^---
//^## ACTIONS

enum StoreActions {
    LIKE_ADD,
    LIKE_REMOVE,
    MESSAGES_FETCH,
    MESSAGES_FETCH_REQUEST,
    MESSAGES_FETCH_SUCCESS,
    DEFAULT
    /*SHARE,
    POST,
    MESSAGES_GET,
    MESSAGES_UPDATE,
    MESSAGE_GET,
    MESSAGE_CREATE,
    MESSAGE_SEND*/
}

interface SocialAction extends Action {
    value: number
}

const createLikeAddAction: (value: number) => SocialAction = (value) => ({
    type: StoreActions.LIKE_ADD,
    value
});

const createLikeRemoveAction: (value: number) => SocialAction = (value) => ({
    type: StoreActions.LIKE_REMOVE,
    value
});

//interface of what the "payload" of the action will be -> {type: "MESSAGES_FETCH_SUCCESS", payload: "somevalue" || messages: [] }
interface MessagesAction extends Action {
    messages: any[]
}

const createMessagesFetchRequestAction: () => MessagesAction = () => {
    console.log("FETCHING MESSAGES FROM SERVER")
    return {
        type: StoreActions.MESSAGES_FETCH_REQUEST,
        messages: []
    }
}

const createMessagesFetchSuccessAction: (messages: any[]) => MessagesAction = (messages) => ({
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

//^---
//^## REDUCERS

interface AppState {
    likes: number;
    likesHistory: string[];
    messages: any[];
}

//EXAMPLE REDUCER
// bad practice - overburdened reducer (Operating on 2 branches of state tree - likes && likesHistory)
const SocialReducer: Reducer<AppState> = (state: AppState = { likes:0, likesHistory: [], messages: [] }, action: SocialAction) => {
    let history
    const ACTION_TYPES : any = {
        [StoreActions.LIKE_ADD] : () => {
            history = state.likesHistory.concat(`op: add, value: ${action.value}`)
            //instead of spread operator
            // return Object.assign({}, state, {likes: state.likes + action.value})
            return {...state, likes: state.likes + action.value, likesHistory: history};
        },
        [StoreActions.LIKE_REMOVE]: () => {
            history = state.likesHistory.concat(`op: remove, value: ${action.value}`)

            return {...state, likes: state.likes - action.value, likesHistory: history};
        },
        "DEFAULT": () => {
            console.log("DEFAULT_ACTION")
            return state;
        },
    };
    const ACTION_KEY = (ACTION_TYPES.hasOwnProperty(action.type)) ? action.type : "DEFAULT"

    return ACTION_TYPES[ACTION_KEY]();
};

//^### LIKES REDUCER
//Good Practice - Single Responsibility Reducer
const LikesReducer: Reducer<number> = (state: number = 0, action: SocialAction) => {
    let history
    const ACTION_TYPES : any = {
        [StoreActions.LIKE_ADD] : () => {
            //instead of spread operator
            // return Object.assign({}, state, {likes: state.likes + action.value})
            return state + action.value;
        },
        [StoreActions.LIKE_REMOVE]: () => {

            return state - action.value;
        },
        "DEFAULT": () => {
            console.log("DEFAULT_ACTION")
            return state;
        },
    };
    const ACTION_KEY = (ACTION_TYPES.hasOwnProperty(action.type)) ? action.type : "DEFAULT"

    return ACTION_TYPES[ACTION_KEY]();
};

//^### HISTORY REDUCER
//Good Practice - Single Responsibility Reducer
const HistoryReducer: Reducer<string[]> = (state: string[] = [], action: SocialAction) => {
    const ACTION_TYPES : any = {
        [StoreActions.LIKE_ADD] : () => {
            //instead of spread operator
            // return Object.assign({}, state, {likes: state.likes + action.value})
            return state.concat(`op: add, value: ${action.value}`);
        },
        [StoreActions.LIKE_REMOVE]: () => {
            return state.concat(`op: remove, value: ${action.value}`);
        },
        "DEFAULT": () => {
            console.log("DEFAULT_ACTION")
            return state;
        },
    };
    const ACTION_KEY = (ACTION_TYPES.hasOwnProperty(action.type)) ? action.type : "DEFAULT"

    return ACTION_TYPES[ACTION_KEY]();
};

const MessagesReducer: Reducer<any[]> = (state: any[] = [], action: MessagesAction) => {
    const ACTION_TYPES : any = {
        [StoreActions.MESSAGES_FETCH] : () => {
            //instead of spread operator
            // return Object.assign({}, state, {likes: state.likes + action.value})
            return state.concat(action.messages)
        },
        [StoreActions.MESSAGES_FETCH_REQUEST]: () => {
            return state.concat(action.messages)
        },
        [StoreActions.MESSAGES_FETCH_SUCCESS]: () => {
            return state.concat(action.messages)
        },
        "DEFAULT": () => {
            console.log("DEFAULT_ACTION")
            return state;
        },
    };
    const ACTION_KEY = (ACTION_TYPES.hasOwnProperty(action.type)) ? action.type : "DEFAULT"

    return ACTION_TYPES[ACTION_KEY]();
}

const reducersMap: ReducersMapObject = {
    likes: LikesReducer,
    likesHistory: HistoryReducer,
    messages: MessagesReducer
}

//^---
//^## STORE

export const AppStore : Store<AppState> = createStore<AppState>(SocialReducer);

AppStore.subscribe(() => {
    console.log("ACTON DISPATCHED, STATE WAS REDUCED");
    console.log(AppStore.getState());
})


//dispatched Actions can happen from within onClick() or emitted by an event
AppStore.dispatch(createLikeAddAction(2));
AppStore.dispatch(createLikeAddAction(2));
AppStore.dispatch(createLikeRemoveAction(1));
AppStore.dispatch(createLikeAddAction(5));
AppStore.dispatch(createLikeRemoveAction(3));
AppStore.dispatch(createLikeAddAction(2));
