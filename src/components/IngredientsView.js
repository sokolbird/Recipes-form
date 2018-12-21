import React, { Component } from "react";

class IngredientsView extends Component {
  render() {
    const listElements = this.props.ingredients.map((item, index) => {
      console.log(item);
      return (
        <li key={index}>
          <div>
            {item.name}: {item.count} {item.countValue}
          </div>
        </li>
      );
    });

    return (
      <div className="ingredients-info">
      <div className="ingredients-title">Ингредиенты: </div>
        <ul className="ingredients-info-ul">{listElements}</ul>
      </div>
    );
  }
}

export default IngredientsView;
