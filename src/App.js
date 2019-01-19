import React, { Component } from 'react';
import Search from './components/Search';
import RecipesList from './components/Recipes/RecipesList';
import { searchRecipes } from './services/RecipeApi'
import './App.css';

class App extends Component {

  state = {
    searchValue: "",
    loading: false,
    recipes: [],
  }

  showLoading() {
    this.setState({
      loading: true,
    });
  }

  hideLoading() {
    this.setState({
      loading: false,
    });
  }
  
  refreshRecipes() {
    this.showLoading();
    const thatSearchValue = this.state.searchValue;
    searchRecipes(this.state.searchValue).then(
      (recipes) => {
        if (this.state.searchValue === thatSearchValue) {
          this.setState({
            recipes: recipes,
          }, this.hideLoading);
        }
      }
    );
  }

  onSearchChange = (value) => {
    this.setState({
      searchValue: value,
    }, () => {
      if (this.state.searchValue.length > 2) {
        this.refreshRecipes();
      }
    });
  }
  
  render() {
    const { searchValue, recipes, loading } = this.state;
    
    return (
      <div className="App">
        <Search term={searchValue} onChange={this.onSearchChange} />
        <RecipesList recipes={recipes} loading={loading} />
      </div>
    );
  }
}

export default App;
