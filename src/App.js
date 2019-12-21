import React from 'react';                                        
import logo from './logo.svg';
import './App.css';
// import Card from './Component/Card/card.js';
import {Cardlist} from './Component/Card_list/card-list.js';


class App extends React.Component{
  constructor(){
    super()
  this.state={
    users:[],
    searchField:''
      }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
    .then(data=>this.setState({users:data},console.log(this.state.users))); 
  }
  filteredcard=(e)=>{
   this.setState({searchField: e.target.value})

  }

render(){
     const {users,searchField} = this.state;
      
      const filterrobot=users.filter(searchField=>searchField.name.toLowerCase()
        .includes(this.state.searchField.toLowerCase()))  
      

    return (
  <div className="App">
    <h1>Robofriend</h1>
   <input type="text" onChange={this.filteredcard} placeholder="Search Robot"/>
    <Cardlist users={filterrobot}/>
      </div>
  );
}}

export default App;

//// const filteredString = users.filter(users =>
      //   users.name.toLowerCase().includes(searchField.toLowerCase()));


/// const filterrobot=this.state.searchField.includes(this.state.users);

/// <input type="text" onChange={(e)=>this.setState({searchField:e.target.value})} placeholder="Search Robot"/>
//// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
// // <Searchbox placeholder = 'search robot' filteredcard={this.filteredcard}/>