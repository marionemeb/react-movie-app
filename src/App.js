import React from 'react';
import './App.css';
import axios from 'axios';

import FormMovies from './FormMovies';
import ListMovies from './ListMovies';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        movies: []
    };
  }

  componentDidUpdate(prevState){
    if(this.state.movies !== prevState.movies){
      this.componentDidMount();
    }
  }

  componentDidMount() {
    const url = 'https://post-a-form.herokuapp.com/api/movies/';
    axios.get(url)
    // Extract the DATA from the received response
    .then(response => {
      this.setState({
        movies: response.data
      });
    });
  }

  render(){
    return (
      <div className="App">
        <FormMovies />
        <h1>Liste des films</h1>
          <ul>
            <ListMovies movies={this.state.movies} />
          </ul>
      </div>
    );
  }
}

export default App;
