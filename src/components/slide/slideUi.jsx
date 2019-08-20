import React, { Component } from 'react';
import { SlideStyled } from './slideStyled'
import { List, Switch } from 'antd-mobile';


class slideUi extends Component {

    constructor(props) {
        super(props);
        this.state = {
          checked: this.props.isSlide.isTrue,
        };
      }

    render() {
        return (
            <SlideStyled bak={this.state.checked}>
                <List>
                    <List.Item
                    extra={<Switch
                    checked={this.state.checked}
                        onChange={() => {
                            this.setState({
                                checked: !this.state.checked,
                            });
                            this.props.event(!this.state.checked)
                        }}
                    />}
                    >{this.props.head}</List.Item>
                    {
                        this.props.text ? 
                        <div className="P_text">{this.props.text}</div>
                        :
                        ''
                    }
                    </List>
            </SlideStyled>
        );
    }

    
}

export default slideUi;