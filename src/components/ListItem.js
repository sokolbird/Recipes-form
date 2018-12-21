import React, { Component } from 'react';
import { Button, Tooltip } from 'antd';

class ListItem extends Component {
    render() {
        return (
            <div className="list-item">
                {typeof this.props.item === "object" ?
                <div className="list-item-grid">
                    <div>{this.props.item.name}</div>
                    <div className="count">{this.props.item.count + ' ' + this.props.item.countValue}</div>
                </div> :
                this.props.item}
                <Tooltip title="Удалить">
                    <Button size="small"
                            shape="circle"
                            icon="delete"
                            onClick={this.props.deleteItem}/>
                </Tooltip>
            </div>
        )
    }
}

export default ListItem;