# REACT TYPESCRIPT PROJECT SCAFFOLDING


### Installation
````
npm install
````


### Serve App
````
npm wpserve
````


## PASSING DATA BETWEEN REACT COMPONENTS
##### PROPS vs STATE
Components have both State and Props

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
