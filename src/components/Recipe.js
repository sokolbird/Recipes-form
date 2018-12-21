import React, { Component } from 'react';
import { Icon, Alert, Button } from 'antd';
import RecipeList from "./RecipeList";

class Recipe extends Component {
    state = {
        recipes: ['']
    };

    render() {
        return (
            <div className="recipe-section">
                <h3>7. Составление рецепта</h3>
                <Alert message='Рецепт должен быть структурирован по шагам. Каждый шаг рецепта
                                содержит фото процесса и его текстовое описание. Чтобы добавить
                                следующий шаг, нажмте "Добавить шаг" внизу формы. Для добавления
                                фото нажмите "Добавить фото" напротив номера шага либо перетащите
                                фото в поле для добавления изображения.'
                       className="alert-two-cols"
                       style={{marginLeft: '10px', marginRight: '10px'}}
                       showIcon
                       icon={<Icon type="question-circle"/>}>
                </Alert>
                <div id="recipe">
                    <RecipeList data={this.state.recipes}
                                recipeChange={this.recipeChange}
                                deleteItem={this.deleteItem}/>
                </div>
                <Button type="primary"
                        icon="plus"
                        className="add-step-btn"
                        size="large"
                        onClick={() => this.addStep()}>
                    Добавить шаг
                </Button>
            </div>
        )
    }

    addStep = () => {
        this.setState((prevState, nextState) => {
            return {recipes: [...prevState.recipes, '']}
        });
    };

    deleteItem = id => {
        let newList = this.state.recipes.slice();
        newList.splice(id, 1);
        this.setState({recipes: newList});
    };

    recipeChange = (id, text) => {
        let newList = this.state.recipes.slice();
        newList[id] = text;
        this.setState({
            recipes: newList
        })
    }
}

export default Recipe;