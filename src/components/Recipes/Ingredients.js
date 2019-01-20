import React, { Component } from 'react';

class Ingredients extends Component {
  
  render() {
    const { ingredients } = this.props;

    return (
      <ul className="Ingredients">
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.quantity} {ingredient.text}</li>
        ))}
      </ul>
    );
  }
}

export default Ingredients;
