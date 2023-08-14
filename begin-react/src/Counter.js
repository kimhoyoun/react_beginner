import React, {Component} from "react";

class Counter extends Component {
    /*
    화살표 함수 문법을 사용하여 메서드를 작성했다면 굳이 constructor를 쓰지 않아도 된다.
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
    */

    state = {
        counter: 0,
        fixed: 1
    };

    handleIncrease = () => {
        this.setState(state => ({
            counter: this.state.counter +1
        }));
    };

    handleDecrease = () => {
        this.setState(state => ({
            counter: this.state.counter - 1
        }));
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        );
    }
}

export default Counter;