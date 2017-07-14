import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppShell } from "./containers"
import { Route } from "react-router"
import { createBrowserHistory } from "history"
import { Router as BrowserRouter, Link, NavLink } from "react-router-dom"

const history = createBrowserHistory()

ReactDOM.render(
    <AppShell title={"Vinces React-Ts Scaffold"}/>,
    document.getElementById("root")
)
