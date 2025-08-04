import { useState } from 'react';
import Board from './Board';
import './App.css'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [isGameStarted, setIsGameStarted] = useState(false);


  // Game Start btn
  function handleClick(i) {
    if (!isGameStarted || squares[i] || calculateWinner(squares)) return;
    
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  // Player label
  function getPlayerLabel(symbol) {
  if (symbol === 'X') return 'Player 1 🟠';
  if (symbol === 'O') return 'Player 2 🔵';
  return '';
}
  
  // Reset Game
  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);
  let status;

  if (!isGameStarted) {
    status = 'Click "Start Game" to begin!';
  } else if (winner) {
    status = `🎉 Winner is ${getPlayerLabel(winner)} 🎉`;
  } else {
    status = `Next player: ${xIsNext ? 'Player 1 🟠' : 'Player 2 🔵'}`;
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  return (
    <div className="app">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="board-container">
        {!isGameStarted && (
          <div className="board-blocker"></div>
        )}

        <Board squares={squares} onClick={handleClick} isGameStarted={isGameStarted} />
        
        {!isGameStarted && (
          <button className="start-button" onClick={() => setIsGameStarted(true)}>
            Start Game
          </button>
        )}
      </div>
      <p>{status}</p>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}


export default App;
