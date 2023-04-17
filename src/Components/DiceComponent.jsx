import React, { Component } from 'react'

export class DiceComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            player: 1,
            diceNum: 0,
            gameOver: false,
          };
        this.roll = this.roll.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }
    roll() {
        const value = Math.floor(Math.random() * 6) + 1;
        this.setState({ diceNum: value });
        
        if (value === 1 || value === 6) {

          return;
        }
        this.setState({ player: this.state.player === 1 ? 2 : 1 });
      }
    resetGame() {
        this.setState({
          player: 1,
          diceNum: 0,
          gameOver: false,
        });
      }
  render() {
    return(

        <div>
        <h1>Dice Game</h1>
        <p>Player {this.state.player}'s turn</p>
        <p>Dice value: {this.state.diceNum}</p>
        <p>Player {this.state.player} takes {this.state.diceNum} steps</p>
        <div className='button'>
        <button onClick={this.roll}>Roll Dice</button>
        {/* {this.state.gameOver && <p>Game over! Player {this.state.player} wins!</p>} */}
        <button onClick={this.resetGame}>Reset Game</button>
        </div>
      </div>
    
      
      );
      
    }
    
  }


export default DiceComponent




