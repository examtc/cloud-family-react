import React, { Component } from 'react';

class Child extends Component {

    constructor(props) {
        super(props)

        this.state={
            list: props
        }
    }

    render() {

        const ary = []

        this.state.list.list.forEach((value,index) => {
            ary.push(<li key={index}><div><img src={value.img} alt=""/></div><p>{value.name}</p></li>)
        });
        return (
            <div>
                {ary.length > 0 ? ary : '还没有人签到哦|ू･ω･` )'}
            </div>
        );
    }

    componentWillReceiveProps(nextprops) {
        this.setState({
            list: nextprops
        })
    }
}

export default Child;