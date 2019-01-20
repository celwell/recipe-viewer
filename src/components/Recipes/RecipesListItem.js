import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecipesListItem extends Component {
  render() {
    const { id, recipe, color } = this.props;
    const { label, image } = recipe;

    return (
      <Link to={`/recipe/${id}`}>
        <li className="RecipesListItem"
            style={{
              backgroundImage: `url(${image})`,
              backgroundColor: color,
            }}>
          {label}
        </li>
      </Link>
    );
  }
}

export default RecipesListItem;
