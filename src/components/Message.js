import React, { Component } from 'react';
import checked from '../media/open-book.svg';
import {Icon} from "antd";

class Message extends Component {
    render() {
        return (
            <div className="end">
                <Icon component={checked} style={{fontSize: '8em', marginBottom: '30px'}}/>
                <h2>
                    Рецепт был успешно опубликован!
                </h2>
                <a href="#" onClick={this.props.toStart}>Вернуться в начало</a>
            </div>
        );
    }
}

export default Message;