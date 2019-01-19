import React, { Component } from 'react';

class RecipesList extends Component {
  
  render() {
    const { recipes, loading } = this.props;
    
    const listItems = recipes.map(
      ({ label }, i) =>
        <li key={i}>{label}</li>
    );

    // todo clean this up
    return (loading ?
            <div className="Loading" /> :
            <ul className="RecipesList">
            {listItems}
            </ul>
           );
  }
}

export default RecipesList;
