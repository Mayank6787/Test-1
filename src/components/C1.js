import { Component } from "react";

class C1 extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {role: "Engineer", name:"",bool:true,toggle:true};
    }

  
   
    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render()
    {
        return(
            <div>
                <h1>Props value - {this.props.brand}</h1>
                <h1>State value - {this.state.role}</h1>
                <button onClick={() => {this.setState({ role:"Doctor"})}}>Click</button>

                <h1>Taking an input and displaying it at the same time</h1>
                <input onChange={this.handleChange} placeholder="Enter your name" />
                <h3>Your name is: {this.state.name}</h3>

                <h1>Bool input with true and false to turn on and off the signal</h1>
                {/* <button onClick={() => {this.setState({ bool: !this.state.bool})}}>Signal</button>
                {
                    (this.state.bool)?
                    <h3 style={{color:"green"}}>Go</h3>
                    :
                    <h3 style={{color:"red"}}>Stop</h3>
                } */}

<button onClick={() => {this.setState({ toggle: !this.state.toggle})}}>Signal</button>
                {
                    (this.state.toggle)?
                    <h3 style={{color:"green"}}>Go</h3>
                    :
                    <h3 style={{color:"red"}}>Stop</h3>
                }
                
            </div>
        )
    }
}
export default C1;

