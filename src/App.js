import React, { Component } from 'react';
import AddUser from "./components/AddUser";
import Users from "./components/Users";



class App extends Component {

  constructor(props){
    super(props);

    this.state={
      users : [
        {
          id : 1,
          name :"Furkan Yıldız",
          email : "frknyldz8489@gmail.com"
        },

        {
          id : 2,
          name :"Murat Turoğlu",
          email : "turoglu666@gmail.com"
        },

        {
          id : 3,
          name :"Zahide Özkan",
          email : "zaideoo34@gmail.com"
        }
      ]
    }
  }
  
  render() {
    
    return (
      <div  className="container">
        <h4>User App</h4> 
        <AddUser/>
        <hr/>
        <Users users={this.state.users}/>
      </div>
    );
  }
}

export default App;
