import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppShell } from "./appshell"
import { Route } from "react-router"
import { createBrowserHistory } from "history"
import { Router as BrowserRouter, Link, NavLink } from "react-router-dom"
import { Provider } from "react-redux";

import { AppStore } from "./store/store";
const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={ AppStore }>
    <AppShell title={"Vinces React-Ts Scaffold"}/>
    </Provider>,
    document.getElementById("root")
)
