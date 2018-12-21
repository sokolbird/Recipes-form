import React, { Component } from 'react';
import ListItem from "./ListItem";

class List extends Component {
    render() {
        const listElements = this.props.data.map((item, index) =>
            <li key={index}>
                <ListItem item={item} deleteItem={() => this.props.deleteItem(index)}/>
            </li>
        );

        return (
            <ul className="list">
                {this.props.addingForm}
                {this.props.data.length !== 0 ? listElements :
                    <div className="empty-data">{this.props.emptyData}</div>}
            </ul>
        )
    }
}

export default List;