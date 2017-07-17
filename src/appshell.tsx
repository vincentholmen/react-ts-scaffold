import * as React from "react"
import * as ReactDOM from "react-dom";
import { Appbar } from "./containers/appbar/appbar";
import { LikesCounter } from "./components/likecounter/likecounter"
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
export interface AppProps{
title: string
}
export class AppShell extends React.Component<AppProps, any >{
    render(){
        return (
            <div>
            <Appbar>
            <h3>WOOOO</h3>
            <LikesCounter></LikesCounter>
            </Appbar>
            <h1>{this.props.title}</h1>
            <Router>
            <div className="rootContainer">
            <div className="appbar">
            </div>
            <Route path="/cars" render={()=>{
                return (
                    <h3>React + TypeScript = Life</h3>
                )
            }} />
            </div>
            </Router>
            </div>


        )
    }
}
