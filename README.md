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
<LikeCounter message={someStrOrVar}></LikeCounter>
````
