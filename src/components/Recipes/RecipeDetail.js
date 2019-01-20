import React, { Component } from 'react';
import Ingredients from './Ingredients';

class RecipesDetail extends Component {
  parseIngredientLines(ingredientLines) {
    return ingredientLines.map(
      line => {
        const [quantity, ...text] = line.split(" ");
        return {quantity: quantity,
                text: text.join(" ")};
      }
    );
  }

  transformServings(ingredients, ratio) {
    return ingredients.map(
      (ingredient) => {
        return {...ingredient, quantity: (ingredient.quantity * ratio)};
      }
    );
  }
  
  render() {
    const { label, image, ingredientLines, yield: servings } = this.props.recipe;
    // todo make selector
    const servingsRatio = 2 / servings;

    return (
      <div className="RecipesDetail">
        <h2>{label}</h2>
        <Ingredients
          ingredients={this.transformServings(
            this.parseIngredientLines(ingredientLines),
            servingsRatio
          )} />
      </div>
    );
  }
}

export default RecipesDetail;
