# REACT TYPESCRIPT PROJECT SCAFFOLDING


### Installation
````
npm install
````


### Serve App
````
npm run wpserve
````


## PASSING DATA BETWEEN REACT COMPONENTS
#### PROPS vs STATE
Components have both State and Props

---
###### PROPS
Props: READONLY Application state that is passed into a Component.

**Components must never manipulate props directly**
````javascript
/*
Using props in a Component
note <any, any> is the type definition for <props,state> -> this can be defined by an interface or any
*/
//OPTIONS INTERFACE => use any if you prefer to not define props or state type
interface AlertBoxProps {
    message: string
}

class AlertBox extends React.Component <AlertBoxProps, any> {

render(){
    return (
        <div className="alertbox"> // we use className="" vs class="" because class is a JS Keyword.
        <p>{this.props.message}</p>
        </div>
    )
}

}
// COMPONENT IS CALLED WITH
<AlertBox message={someStrOrVar}></AlertBox>
````
---
###### STATE
STATE: Local state of component, can be passed to child components as Props.

**Components State can be manipulated after init with this.setState({valueA:""})**

State is useful for isolated components.
````javascript
/*
Using State in a Component
*/
//OPTIONS INTERFACE => use any if you prefer to not define props or state type
interface LikesCounterState {
    likes: number
}

class LikesCounter extends React.Component <any, LikesCounterState> {
constructor(props){
    super(props);
    this.state = { likes: 4}

}

handleLikeClick(e) {
    e.preventDefault();
    this.setState({likes: 4++});
}
render(){
    return (
        <div className="likesCounter">
        <span className="likeTotal">{this.state.likes}</span>
        <button onClick={handleLikeClick}>Like</button>
        </div>
    )
}

}
// COMPONENT IS CALLED WITH
<LikeCounter></LikeCounter>
````


## REDUX:
Redux is a state management framework that are composed of a "Store", "Reducers", and "Actions";

The paradigm of Redux is to create a uni-directional data flow within an application, this can often be confusing and explained in overly technical terms.

Generally, Redux is composed of a Singular store, where the state of the application lives.
---
### Reducers:
Merge new state with current state and return the updated state Object pertaining to that reducers obligation

**Note**: Best practice calls for reducers with single responsibility for each branch of the state tree.

````javascript
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


````
---
