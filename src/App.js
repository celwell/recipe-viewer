import React, { Component, Fragment } from 'react';
import Search from './components/Search';
import RecipesList from './components/Recipes/RecipesList';
import RecipeDetail from './components/Recipes/RecipeDetail';
import { searchRecipes } from './services/RecipeApi';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    searchValue: "",
    loading: false,
    recipes: [],
  }

  showLoading() {
    this.setState({ loading: true });
  }

  hideLoading() {
    this.setState({ loading: false });
  }
  
  refreshRecipes() {
    this.showLoading();
    const thatSearchValue = this.state.searchValue;
    searchRecipes(this.state.searchValue).then(
      (recipes) => {
        if (this.state.searchValue === thatSearchValue) {
          if (recipes !== false) {
            this.setState({ recipes }, this.hideLoading);
          } else {
            this.setState({
              error: "API rate limit exceeded.",
            }, this.hideLoading);
          }
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
    const { searchValue, recipes, loading, error } = this.state;
    
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={(props) => (
            <Fragment>
              <Search term={searchValue} onChange={this.onSearchChange} />
              <RecipesList recipes={recipes} loading={loading} error={error} />
            </Fragment>)} />
          <Route path="/recipe/:id" render={({ match }) => (
            <RecipeDetail recipe={recipes[match.params.id]} />
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
