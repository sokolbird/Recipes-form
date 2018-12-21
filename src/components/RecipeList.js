import React, { Component } from 'react';
import RecipeForm from "./RecipeForm";

class RecipeList extends Component {
    render() {
        const listElements = this.props.data.map((item, index) =>
            <RecipeForm recipe={item}
                        key={index}
                        length={this.props.data.length}
                        deleteItem={() => this.props.deleteItem(index)}
                        recipeChange={this.props.recipeChange}
                        index={index}/>
        );

        return (
            <div>
                {listElements}
            </div>
        )
    }

    componentDidUpdate() {
        document.getElementById('recipe').lastChild.lastChild.lastChild.focus();
    }
}

export default RecipeList;