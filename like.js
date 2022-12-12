import Hoc from './hoc';
import React, {Component} from "react";
export class Likes extends React.Component{
constructor(props){
    super(props)
    this.state={
        likes:0,
    }
}
handleClick=()=>{
    this.setState({
        likes:this.state.likes+1
    })
}
render(){
    return(
        <div>
            {this.state.likes}<br/>
            <button onClick={this.handleClick}>Add Like</button>
        </div>
    )
}
}
const EnhancedLikes=Hoc(Likes);
export default EnhancedLikes;