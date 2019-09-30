import React from 'react';

class Game extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="game-inner-container">
        <div className="left-img container">
          <img src='https://thumbs.dreamstime.com/b/cute-japanese-chef-happy-smiling-serving-bowl-japanese-soup-noodles-mascot-character-illustration-cute-japanese-chef-102690808.jpg' alt=""/>
        </div>

        <div className="board">

        </div>

        <div className="right-img container">
          <img src='https://thumbs.dreamstime.com/b/cute-japanese-chef-happy-smiling-serving-bowl-japanese-soup-noodles-mascot-character-illustration-cute-japanese-chef-102690808.jpg' alt=""/>
        </div>
      </div>
    )
  }
}

export default Game;
