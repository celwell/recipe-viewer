import React, { Component } from 'react';

class RecipesListItem extends Component {
  render() {
    const { recipe, color } = this.props;
    const { label, image } = recipe;

    return (
      <li className="RecipesListItem"
          style={{
            backgroundImage: `url(${image})`,
            backgroundColor: color,
          }}>
        {label}
      </li>
    );
  }
}

export default RecipesListItem;
