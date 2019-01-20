import React, { Component } from 'react';
import Ingredients from './Ingredients';
import math from 'mathjs';

class RecipesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetServings: props.recipe.yield,
    };
  }
  
  parseIngredientLines(ingredientLines) {
    return ingredientLines.map(
      line => {
        const [quantity, ...text] = line.split(" ");
        return {quantity: quantity,
                text: text.join(" ")};
      }
    );
  }

  decimalToFraction(value) {
    if (value < 1) {
      return math.format(math.fraction(value), { fraction: 'ratio' });
    } else {
      return value;
    }
  }
  
  transformServings(ingredients, ratio) {
    return ingredients.map(
      (ingredient) => {
        const quantity = parseInt(ingredient.quantity);
        if (isNaN(quantity)) {
          return ingredient;
        } else {
          return {...ingredient,
                  quantity: this.decimalToFraction(quantity * ratio)};
        }
      }
    );
  }

  onChangeTargetServings = (e) => {
    this.setState({
      targetServings: e.target.value
    });
  }
  
  render() {
    const { recipe } = this.props;
    const { targetServings } =  this.state;
    const { label, image, ingredientLines, yield: servings } = recipe;
    // todo make selector
    const servingsRatio = targetServings / servings;

    return (
      <div className="RecipesDetail">
        <h2>{label}</h2>
        <label>
          Number of Servings:&nbsp;
          <select value={targetServings}
                  onChange={this.onChangeTargetServings}>
            {Array(20).fill().map((v, i) => (
              <option value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </label>
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
