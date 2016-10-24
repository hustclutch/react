import Hello from './components/Hello.js';
import ReactDOM from 'react-dom';
import React from 'react';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tick: 0,
            backgroundColor: "lightblue"
        };
    }

    changeToGray() {
        this.setState(
            Object.assign({}, this.state, {backgroundColor: "gray"})
        )
    }

    changeToLightBlue() {
        this.setState(
            Object.assign({}, this.state, {backgroundColor: "lightblue"})
        )
    }

    timer() {
        this.setState(
            Object.assign({}, this.state, {tick: (this.state.tick+1)%9})
        )
    }

    componentDidMount() {
        setInterval(this.timer.bind(this), 1000);
    }

    render() {

        let parentStyle = {
            border: "1px solid #000",
            padding: "30px",
            backgroundColor: this.state.backgroundColor
        }

        return (
            <div style={parentStyle}>
                <h1>我是父组件，我的state是：{JSON.stringify(this.state)}</h1>
                <Hello action={"Hello"} index={this.state.tick} callBack={this.changeToGray.bind(this)} />
                <Hello action={"Bye"} index={this.state.tick} callBack={this.changeToLightBlue.bind(this)} />
            </div>
        )
    }
}


ReactDOM.render(<Main />, document.getElementById("content"));