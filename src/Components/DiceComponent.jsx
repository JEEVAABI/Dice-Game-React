import React, { Component } from 'react'

export class DiceComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            player: 1,
            diceNum: 0,
          };
        this.roll = this.roll.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }
    // roll() {
    //     const max=6
    //     const min=1

    //     const value = Math.floor(Math.random() * (max-min+1)) + min;
    //     this.setState({ diceNum: value });
        
    //     if (value === 1 || value === 6) {
    //         this.setState({player: this.state.player})
    //       return;
    //     }
    //     this.setState({ player: this.state.player === 1 ? 2 : 1 });
    //   }
     
    
    // roll() {
      //   const max = 6;
      //   const min = 1;
      //   const value = Math.floor(Math.random() * (max - min + 1)) + min;
      //   this.setState({ diceNum: value });
      //   if (value === 1 || value === 6) {
      //     return;
      //   }
      //   this.setState({ player: this.state.player === 1 ? 2 : 1 });
      // }


      //       roll() {
//   const max = 6;
//   const min = 1;
//   const value = Math.floor(Math.random() * (max - min + 1)) + min;
  
//   if (value === 1 || value === 6) {
//     // same player rolls again
//     this.setState({ diceNum: value });
//     return;
//   }
  
//   this.setState({ player: this.state.player === 1 ? 2 : 1, diceNum: value });
// }

roll() {
  const max = 6;
  const min = 1;
  const value = Math.floor(Math.random() * (max - min + 1)) + min;
  
  if (value === 1 || value === 6) {
    // same player rolls again
    this.setState({ diceNum: value });
    return;
  }
  
  this.setState({ diceNum: value });
  
  // change player after 2 seconds
  setTimeout(() => {
    this.setState({ player: this.state.player === 1 ? 2 : 1 });
  }, 2000);
}

    resetGame() {
        this.setState({
          player: 1,
          diceNum: 0,
        });
      }
  // render() {
  //   return(

  //       <div>
  //       <h1>Dice Game</h1>
  //       <p>Player {this.state.player}'s turn</p>
  //       <p>Dice value: {this.state.diceNum}</p>
  //       <p>Player {this.state.player} takes {this.state.diceNum} steps</p>
        
  //       <button onClick={this.roll}>Roll Dice</button>
  //       <button onClick={this.resetGame}>Reset Game</button>

  //     </div>
    
      
  //     );
      
  //   }
  render() {
    return (
      <div>
        <h1>Dice Game</h1>
        <p>Player {this.state.player}'s turn</p>
        <p>Dice value: {this.state.diceNum}</p>
        <p>Player {this.state.player} takes {this.state.diceNum} steps</p>
        <button onClick={this.roll}>Roll Dice</button>
        <button onClick={this.resetGame}>Reset Game</button>
      </div>
    );
  }
  
    
  }


export default DiceComponent




