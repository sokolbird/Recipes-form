import React, { Component } from "react";

class EquipmentView extends Component {
  render() {
    const listElements = this.props.equipment.map((item, index) => {
      console.log(item);
      return (
        <li key={index}>
          <div>
            {item}
          </div>
        </li>
      );
    });

    return (
      <div className="ingredients-info last">
      <div className="ingredients-title">Оборудование: </div>
        <ul className="ingredients-info-ul">{listElements}</ul>
      </div>
    );
  }
}

export default EquipmentView;
