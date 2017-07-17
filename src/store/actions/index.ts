import { Action } from "redux";
import { UserLikeAction, createUserLikeAction, createUserDislikeAction }  from "./user-likes.action"
import * as UserMessagesActions from "./user-messages.action";

export enum StoreActions {
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

export {
    UserLikeAction,
    createUserLikeAction,
    createUserDislikeAction,
    UserMessagesActions
}
