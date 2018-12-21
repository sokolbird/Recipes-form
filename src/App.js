import React, { Component } from 'react';
import './App.css';
import { Steps, Icon, Button, Tooltip } from 'antd';
import ingredients from './media/harvest.svg';
import recipe from './media/recipes.svg';
import Info from "./components/Info";
import Ingredients from "./components/Ingredients";
import Recipe from "./components/Recipe";
import Message from "./components/Message";
import View from "./components/View";

const Step = Steps.Step;

class App extends Component {
  state = {
      step: 0,
      name: '',
      info: '',
      hours: '',
      minutes: '',
      tags: [],
      ingredients: [],
      equipment: [],
      onIngredientAdd: false,
      onEquipmentAdd: false,
  };

  render() {
    return (
      <div className="App">
          <Steps className="steps" current={this.state.step}>
              <Step title="Информация" icon={<Icon type="info-circle" />} />
              <Step title="Ингредиенты" icon={<Icon component={ingredients} />} />
              <Step title="Рецепт" icon={<Icon component={recipe} />} />
              <Step title="Просмотр" icon={<Icon type="file-done" />} />
              <Step title="Завершение" icon={<Icon type="smile"  />} />
          </Steps>
          {this.state.step === 4 ? <Message toStart={() => this.setState({step: 0})}/> :
              <main>
                  <div className="next-previous-btn">
                      <Button type="primary"
                              shape="circle"
                              icon="arrow-left"
                              size="large"
                              disabled={this.state.step === 0}
                              onClick={this.onPrevClick}/>
                  </div>

                  {
                      this.state.step === 0 ? <Info {...this.state}
                                                    removeTag={this.handleTagClose}
                                                    addTag={this.handleTagAdd}
                                                    onChange={this.onInputChange}/> :
                      this.state.step === 1 ? <Ingredients {...this.state}
                                                           delete={this.deleteItem}
                                                           addIngredient={this.addIngredient}
                                                           addEquipment={this.addEquipment}/> :
                      this.state.step === 2 ? <Recipe/> :
                      this.state.step === 3 ? <View {...this.state}/> :
                      this.state.step === 4 ? <Message/> : null
                  }

                  <div className="next-previous-btn">
                      {this.state.step === 3 ?
                          <Tooltip title="Опубликовать рецепт!">
                              <Button type="primary"
                                      shape="circle"
                                      icon="check"
                                      size="large"
                                      onClick={this.onNextClick}/>
                          </Tooltip> :
                          <Button type="primary"
                                  shape="circle"
                                  icon="arrow-right"
                                  size="large"
                                  onClick={this.onNextClick}
                          />
                      }

                  </div>
              </main>
          }
      </div>
    );
  }

    onNextClick = () => {
      this.setState({step: this.state.step + 1})
    };

    onPrevClick = () => {
      this.setState({step: this.state.step - 1})
    };

    onInputChange = inputName => e => {
      this.setState({[inputName]: e.target.value});
    };

    handleTagClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        this.setState({ tags });
    };

    handleTagAdd = (inputValue) => {
        const state = this.state;
        let tags = state.tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        this.setState({ tags });
    };

    addIngredient = (name, count, countValue) => {
        if (name !== '' && count !== '') {
            let newIngredient =
                {
                    name: name,
                    count: count,
                    countValue: countValue
                };
            this.setState({
                ingredients: [newIngredient, ...this.state.ingredients],
                onIngredientsAdd: false
            })
        }
    };

    addEquipment = (name) => {
        if (name !== '') {
            this.setState({
                equipment: [name, ...this.state.equipment],
                onEquipmentAdd: false
            })
        }
    };

    deleteItem = listName => id => {
        let newList = this.state[listName].slice();
        newList.splice(id, 1);
        this.setState({[listName]: newList});
    };
}

export default App;
