import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Scroll from './components/Scroll';
import './App.css';

// function
class App extends Component {
  // constructor allows access to super() which gives access to this.state={}
  // will allow to set to a default
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  // customs/class method  onSearchChange/handleChange method
  // we uses EX 6 arrow function and the unique characteristics about them
  // ()=>{}
  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    // destructuring will allows us to pull properties of
    // an object and set them to the const that is in side of '{}'
    const { robots, searchfield } = this.state;

    // includes() just check the value that was passed to see if
    // it exits in the array.

    const filteredRobots = robots.filter((robot) =>
      robot.name
        .toString()
        .toLowerCase()
        .includes(searchfield.toString().toLocaleLowerCase())
    );

    return !robots.length ? (
      <h1> Loading </h1>
    ) : (
      <div className='App tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox
          placeholder='Search Robots'
          searchChange={this.onSearchChange}
        />
        <Scroll>
          <CardList robots={filteredRobots}></CardList>
        </Scroll>
      </div>
    );
  }
}

export default App;
