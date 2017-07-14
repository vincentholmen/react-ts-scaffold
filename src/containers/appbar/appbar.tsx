import * as React from "react";
/*
export interface AppbarProps {
apptitle:"React-TS-Scaffold"
}
*/
export class Appbar extends React.Component<any, any>{
    render() {
        return (
            <div id="RootAppbar">
            <h3>MY ROOT APPBAR</h3>
            {this.props.children}
            </div>
        );
    }
}
