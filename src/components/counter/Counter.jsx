import React, {Component} from 'react';
import './Counter.css';
class Counter extends Component{

    constructor(){
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    
    render() {
        return (
          <div className="Counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
            <CounterButton by={2} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
            <CounterButton by={100} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
            <span className="Count">{this.state.counter}</span>
            <div className="Reset"> 
                <button className="reset" onClick={this.reset}>Reset</button>
            </div>
          </div>
        );
      }

    increment(by){
        //console.log(`increments from the parent - ${by}`);
        this.setState(
            //counter:this.state.counter + by
            () => {
                return{ counter:this.state.counter + by } 
                }
        );

    }

    decrement(by){
        //console.log(`increments from the parent - ${by}`);
        this.setState(
            //counter:this.state.counter + by
            () => {
                return{ counter:this.state.counter - by } 
                }
        );
    }

    reset(by){
        this.setState(
            () => {
                return{ counter: 0 } 
                }
        );

    }

    
}

class CounterButton extends Component{

   
    constructor(){
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    render (){
        return(
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decrement}>-{this.props.by}</button>
            </div>
        );
    }

    
    
    increment(){
        //sconsole.log(`${by}`);
        //this.state.counter++;
        this.setState({
            counter: this.state.counter + this.props.by
        });

        this.props.incrementMethod(this.props.by);
    }

    decrement(){
        this.setState({
            counter: this.state.counter - this.props.by
        });

        this.props.decrementMethod(this.props.by);
    }
}

export default Counter;