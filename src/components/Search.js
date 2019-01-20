import React, { Component } from 'react';

class Search extends Component {
  componentDidMount() {
    this.input.focus();
  }
  
  render() {
    const { term, onChange } = this.props;
    
    return (
      <input className="Search"
             ref={(input) => this.input = input}
             type="text"
             value={term}
             placeholder="Search..."
             onChange={(e) => onChange(e.target.value)} />    
    );
  }
}

export default Search;
