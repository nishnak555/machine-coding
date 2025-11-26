import React, { useState } from "react";
import "../App.css";

type Player = "X" | "O";
type Cell = Player | null;

const TicTocToe: React.FC = () => {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | "Draw" | null>(null);

  // Winning combinations
  const wins: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (newBoard: Cell[]): Player | "Draw" | null => {
    for (let w of wins) {
      const [a, b, c] = w;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a]; // guaranteed Player
      }
    }

    if (newBoard.every((cell) => cell !== null)) return "Draw";
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;

    setBoard(updatedBoard);

    const result = checkWinner(updatedBoard);
    if (result) {
      setWinner(result);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div className="tic-container">
      <h2>Tic Tac Toe</h2>

      <div className="board">
        {board.map((cell, i) => (
          <div key={i} className="cell" onClick={() => handleClick(i)}>
            {cell}
          </div>
        ))}
      </div>

      {winner && (
        <div className="result">
          {winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`}
        </div>
      )}

      <button className="btn" onClick={resetGame}>
        Restart
      </button>
    </div>
  );
};

export default TicTocToe;
