import React, { Component } from 'react';
import Ingredients from './Ingredients';

class RecipesDetail extends Component {
  parseIngredientLines(ingredientLines) {
    return ingredientLines.map(
      line => {
        const [quantity, ...text] = line.split(" ");
        return {quantity: quantity + " --- ",
                text: text.join(" ")};
      }
    );
  }
  
  render() {
    const { label, image, ingredientLines } = this.props.recipe;

    return (
      <div className="RecipesDetail">
        <h2>{label}</h2>
        <Ingredients
          ingredients={this.parseIngredientLines(ingredientLines)} />
      </div>
    );
  }
}

export default RecipesDetail;
