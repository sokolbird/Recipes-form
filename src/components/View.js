import React, { Component } from "react";
import { Icon, Alert, Button, Tag, Tooltip } from "antd";
import IngredientsView from "./IngredientsView";
import EquipmentView from "./EquipmentView";

const colorsTag = [
  "#f50",
  "#2db7f5",
  "#87d068",
  "#108ee9",
  "#13c2c2",
  "#d3f261",
  "#fadb14",
  "#b37feb"
];

class View extends Component {
  render() {
    return (
      <div className="view-section">
        <div className="title">
          <div className="recipe-title">{this.props.name ? this.props.name : 'Название рецепта'}</div>
          <div className="time-title">
            {this.props.hours !== ""
              ? `${this.props.hours} ч ${this.props.minutes} мин`
              : 
              this.props.minutes !== "" ? `${this.props.minutes} мин` : "30 мин"}
          </div>
        </div>

        <p className="view-info">
          If there’s one thing we can agree on here, it’s that buffalo chicken
          and ranch are an almost-perfect pair. When you take that
          tried-and-true combo and put it on a flatbread (along with an
          almost-instant tomato sauce and fresh mozzarella), well, you’ve got
          yourself a perfectly perfect meal.
        </p>
        <div className="tags-wrapper view">
          <div className="ingredients-title">Теги: </div>
          {this.props.tags.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
              <Tag key={tag} color={colorsTag[index % 8]} className="tag">
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </Tag>
            );
            return isLongTag ? (
              <Tooltip title={tag} key={tag}>
                {tagElem}
              </Tooltip>
            ) : (
              tagElem
            );
          })}
        </div>
        <IngredientsView {...this.props} />
        <EquipmentView {...this.props} />
        <div className="recipe-view-title">Рецепт</div>
        <div className="recipe-steps">
          <ol className="recipe-view-list">
            <li className="recipe-view-step">
            <div className="number-recipe">1</div>
              <div>
                <img
                  className="recipe-view-img"
                  alt="recipe"
                  src="https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_400,q_auto/v1/hellofresh_s3/5be44c7e30006c45ac241402/step-36a130ff.jpg"
                />
              </div>
              <div className="recipe-view-text">
                Wash and dry all produce. Halve, deseed, and dice green pepper
                into ½-inch pieces. Trim, then thinly slice scallions,
                separating whites from greens. Mince garlic.
              </div>
            </li>
            <li className="recipe-view-step">
            <div className="number-recipe">2</div>
              <div>
                <img
                  className="recipe-view-img"
                  alt="recipe"
                  src="https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_400,q_auto/v1/hellofresh_s3/5be44c7e30006c45ac241402/step-009caa67.jpg"
                />
              </div>
              <div className="recipe-view-text">
                Wash and dry all produce. Halve, deseed, and dice green pepper
                into ½-inch pieces. Trim, then thinly slice scallions,
                separating whites from greens. Mince garlic.
              </div>
            </li>
            <li className="recipe-view-step">
            <div className="number-recipe">3</div>
              <div>
                <img
                  className="recipe-view-img"
                  alt="recipe"
                  src="https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_400,q_auto/v1/hellofresh_s3/5be44c7e30006c45ac241402/step-318503b2.jpg"
                />
              </div>
              <div className="recipe-view-text">
                Wash and dry all produce. Halve, deseed, and dice green pepper
                into ½-inch pieces. Trim, then thinly slice scallions,
                separating whites from greens. Mince garlic.
              </div>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default View;
