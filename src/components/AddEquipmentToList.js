import React, { Component } from 'react';
import { Input, Button, Tooltip } from 'antd';

class AddEquipmentToList extends Component {
    state = {
        name: '',
    };

    render() {
        return (
            <div className={this.props.className + ' add-equip-form'}>
                <Input size="small"
                       placeholder="Название"
                       value={this.state.name}
                       onChange={this.onNameChange}
                       onPressEnter={this.addEquipment}/>
                <Tooltip title="Добавить">
                    <Button type="primary"
                            size="small"
                            shape="circle"
                            icon="check"
                            onClick={this.addEquipment}
                    />
                </Tooltip>
            </div>
        )
    }

    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    addEquipment = () => {
        this.props.addEquipment(this.state.name);
        this.setState({
            name: ''
        });
        this.props.hideAdding('onEquipmentAdd');
    };
}

export default AddEquipmentToList;