import { Action } from "redux";
import { StoreActions } from "../";

export interface UserLikeAction extends Action {
    value: number;
}

export const createUserLikeAction: (value: number) => UserLikeAction = (value) => ({
    type: StoreActions.LIKE_ADD,
    value
})

export const createUserDislikeAction: (value: number) => UserLikeAction = (value) => ({
    type: StoreActions.LIKE_REMOVE,
    value
})
