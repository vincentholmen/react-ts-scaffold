import * as React from "react";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { AppStore } from "../../store/store"
import { createUserLikeAction } from "../../store/actions/"
interface LikesCounterState {
    userlikedata: number

}




export class LikesComponent extends React.Component <any, LikesCounterState> {
/*constructor(props: any){
    super(props);
    //this.state = { likes: 4}

}*/

handleLikeClick(e : any) {
    e.preventDefault();
    this.props.userLike(1)
}

handleDislikeClick(e: any) {
    e.preventDefault();
    this.props.userLike(-1)
}

render(){
    return (
        <div className="likesCounter">
        <span className="likeTotal">{this.props.likes}</span>
        <button onClick={(e) => this.handleLikeClick(e)}>Like</button>
        <button onClick={this.handleDislikeClick.bind(this)}>Dislike</button>
        </div>
    )
}

}
const mapStateToProps = (state) => {
    console.log(state)
    return{
        likes: state.userlikedata
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userLike: createUserLikeAction
    },dispatch)
    /*return {
        userLike: () => dispatch(createUserLikeAction(1))
    }*/
}
export const LikesCounter =  connect(mapStateToProps, mapDispatchToProps)(LikesComponent)
