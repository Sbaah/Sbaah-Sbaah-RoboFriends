// import React, { Component } from 'react';

//class App extends Component {
// constructor allows access to super() which gives access to this.state={}
// will allow to set to a default

// constructor() {
//   super();
//   this.state = {
//     robots: [],
//     searchfield: '',
//   };
// }

// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((users) => {
//       this.setState({ robots: users });
//     });
// }

// customs/class method  onSearchChange/handleChange method
// we uses EX 6 arrow function and the unique characteristics about them
// ()=>{}
// onSearchChange = (e) => {
//   this.setState({ searchfield: e.target.value });
// };

// not need for render in function
// render() {}
// destructuring will allows us to pull properties of
// an object and set them to the const that is in side of '{}'

// remove this line because we already have robots and search field
// const { robots, searchfield } = this.state;

// includes() just check the value that was passed to see if
// it exits in the array.

//}
