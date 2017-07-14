import * as React from "react";

interface LikesCounterState {
    likes: number
}

export class LikesCounter extends React.Component <any, LikesCounterState> {
constructor(props: any){
    super(props);
    this.state = { likes: 4}

}

handleLikeClick(e : any) {
    e.preventDefault();
    let newCount = this.state.likes + 1;
    this.setState({likes: newCount});
}
render(){
    return (
        <div className="likesCounter">
        <span className="likeTotal">{this.state.likes}</span>
        <button onClick={this.handleLikeClick.bind(this)}>Like</button>
        </div>
    )
}

}
