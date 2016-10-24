import React, {Component} from 'react';

export default class Hello extends Component {

    render(){
        let names = ["高明", "利兵", "少鹏", "文闻", "永刚", "王涛", "张悦", "黄灿", "双林"];
        let childrenStyle = {
            border: "1px solid #000",
            padding: "30px",
            backgroundColor: "rgb(246, 249, 88)"
        }

        let buttonStyle = {
            border: "1px solid blue",
            color: "white",
            backgroundColor: "blue",
            padding: "10px",
            borderRadius: "5px"
        }

        return (
            <div style={childrenStyle}>
                <h2>我是子组件{this.props.action}，父组件传给我的props是：{JSON.stringify(this.props)}</h2>
                <h1>{this.props.action}, {names[this.props.index]}</h1>
                <span style={buttonStyle} href="" onClick={this.props.callBack}>点我改变父组件背景色</span>
            </div>
        )
    }
}