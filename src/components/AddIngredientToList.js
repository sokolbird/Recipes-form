import React, { Component } from 'react';
import {Input, Button, Select, Tooltip} from 'antd';

const Option = Select.Option;

class AddIngredientToList extends Component {
    state = {
        name: '',
        count: '',
        countValue: 'шт'
    };

    render() {
        return (
            <div className={this.props.className + ' add-ingr-form'}>
                <Input size="small"
                       placeholder="Название"
                       value={this.state.name}
                       onChange={this.onNameChange}/>
                <Input size="small"
                       type="number"
                       min={0}
                       value={this.state.count}
                       onChange={this.onCountChange}
                       placeholder="Кол-во"/>
                <Select size="small"
                        placeholder="Ед. измер."
                        onChange={this.onCountValueChange}
                        value={this.state.countValue}>
                    <Option value="шт">штука</Option>
                    <Option value="кг">килограмм</Option>
                    <Option value="л">литр</Option>
                    <Option value="г">грамм</Option>
                </Select>
                <Tooltip title="Добавить">
                    <Button type="primary"
                            size="small"
                            shape="circle"
                            icon="check"
                            onClick={this.addIngredient}
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

    onCountChange = (e) => {
        this.setState({
            count: e.target.value
        })
    };

    onCountValueChange = (value) => {
        this.setState({
            countValue: value
        })
    };

    addIngredient = () => {
        this.props.addIngredient(this.state.name, this.state.count, this.state.countValue);
        this.setState({
            name: '',
            count: '',
            countValue: 'шт'
        });
        this.props.hideAdding('onIngredientAdd');
    }
}

export default AddIngredientToList;