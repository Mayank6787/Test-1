import { Component } from "react";

class C3 extends Component{
    componentWillUnmount(){
        console.log("I am componentWillUnmount method and i am getting removed")
    }
    render(){
        return(
            <div>
                <h1>This is a component method will be removed .....</h1>
            </div>
        )
    }
}

export default C3;