import React, { Component } from 'react';
import RecipesListItem from './RecipesListItem';

const colors = [
  "#747d8c",
  "#57606f",
];

class RecipesList extends Component {  
  render() {
    const { recipes, loading, error } = this.props;
    
    const listItems = recipes.map(
      (recipe, i) => (
        <RecipesListItem key={i}
                         id={i}
                         recipe={recipe}
                         color={colors[i % colors.length]} />
      )
    );

    // todo clean this up
    return (loading ?
            <div className="Loading" /> :
            <ul className="RecipesList">
            {error || listItems}
            </ul>
           );
  }
}

export default RecipesList;
