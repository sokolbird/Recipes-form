import React, { Component } from 'react';
import { Icon, Input, Alert, Button, Select } from 'antd';
import List from "./List";
import AddIngredientToList from "./AddIngredientToList";
import AddEquipmentToList from "./AddEquipmentToList";

class Ingredients extends Component{
    state = {
        onIngredientAdd: false,
        onEquipmentAdd: false,
    };

    render() {
        return (
            <div className="ingredients-section">
                <Alert message='Составьте список ингредиентов и оборудования, необходимого для приготовления
                                   данного блюда. Чтобы добавить новую позицию в списках, нажмите
                                   "Добавить ингредиент/оборудование", после чего укажите название
                                   продукта/оборудования. В списке ингредиентов также следует указать
                                   количество каждого продукта.'
                       className="alert-two-cols"
                       showIcon
                       icon={<Icon type="question-circle"/>}
                >
                </Alert>
                <div id="ingredients">
                    <h3>5. Добавьте необходимые ингредиенты</h3>
                    <div className="card-header"
                         onClick={() => this.toggleAdding('onIngredientAdd')}>
                        <Icon type={this.state.onIngredientAdd ? 'minus' : 'plus'}/>
                        &nbsp; &nbsp;
                        {this.state.onIngredientAdd ? 'Отменить добавление' : 'Добавить ингредиент'}
                    </div>
                    <List data={this.props.ingredients}
                          deleteItem={this.props.delete('ingredients')}
                          emptyData="Список ингредиентов пока пуст..."
                          addingForm={
                              <AddIngredientToList className={this.state.onIngredientAdd ? '' : 'add-disabled'}
                                                   hideAdding={this.hideAdding}
                                                   addIngredient={this.props.addIngredient}/>
                          }/>
                </div>
                <div id="equipment">
                    <h3>6. Укажите необходимое оборудование</h3>
                    <div className="card-header"
                         onClick={() => this.toggleAdding('onEquipmentAdd')}>
                        <Icon type={this.state.onEquipmentAdd ? 'minus' : 'plus'}/>
                        &nbsp; &nbsp;
                        {this.state.onEquipmentAdd ? 'Отменить добавление' : 'Добавить оборудование'}
                    </div>
                    <List data={this.props.equipment}
                          deleteItem={this.props.delete('equipment')}
                          emptyData="Список оборудования пока пуст..."
                          addingForm={
                              <AddEquipmentToList className={this.state.onEquipmentAdd ? '' : 'add-disabled'}
                                                  hideAdding={this.hideAdding}
                                                  addEquipment={this.props.addEquipment}/>
                          }
                    />
                </div>
            </div>
        )
    }

    toggleAdding = (name) => {
        this.setState({[name]: !this.state[name]})
    };

    hideAdding = name => {
        this.setState({[name]: false})
    }
}

export default Ingredients;