import React, { useState, useEffect } from 'react';
import CardList from '../components/card-list/card-list.component';
import SearchBox from '../components/search-box/search-box.component';
import Scroll from '../components/Scroll';
import './App.css';

// Converted the class component to function component with hocks
// which will allows us to use state and other life cycle methods...

//class App extends Component {
function App() {
  // useState
  // return the peace of state and the function that changes that state
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  // useEffect
  // it runs automatically by react
  //
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  // changed this into a variable
  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };

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
      <SearchBox placeholder='Search Robots' searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots}></CardList>
      </Scroll>
    </div>
  );
}

export default App;
