import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clicked: [],
  };


  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {

  
    };

    var shufflef = this.shuffle(this.state.friends)
    this.setState({friends:shufflef })

    console.log(id);
    //   this.handleIncrement();
    //   this.setState({ clicked: this.state.clicked.concat(id) });
    // } else {
    //   this.handleReset();
    // }

  };

  //found on https://www.frankmitchell.org/2015/01/fisher-yates/
  //shuffle = (array) => {magic happens here}
  // shuffle = function (array) {magic happens here}
  shuffle = (array) => {
    var i = 0
      , j = 0
      , temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array; 
  }

  //removeFriend = id => {
  // Filter this.state.friends for friends with an id not equal to the id being removed
  //  const friends = this.state.friends.filter(friend => friend.id !== id);
  // Set this.state.friends equal to the new friends array
  //  this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Women In Tech</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            handleClick={this.handleClick}
            shuffle={this.shuffle}
            //handleReset={this.handleReset}

            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  };

}
export default App;
