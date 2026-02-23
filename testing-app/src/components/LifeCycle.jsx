import React, {Component} from "react";

class LifeCycle extends Component{
    constructor(){
        super();
        this.state = { count : 0 };
        console.log("Constructor Called..");
    }

    componentDidMount(){
        console.log("Component Created....");
    }
    componentDidUpdate(){
        console.log("Component Updated....");
    }
    componentWillUnmount(){
        console.log("Component Will Unmouted....");
    }
    render(){
        console.log("Hello....");
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                
                <button onClick={() => this.setState({count : this.state.count - 1})}>Decrement</button>
                <button onClick={() => this.setState({count : this.state.count + 1})}>Increment</button>
            </div>
        )

    }
}

export default LifeCycle;