import { useEffect, useState } from "react";

export default function Board() {
  let initialBoardValue = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  // -1 circle
  // 1 cross
  let [board, setBoard] = useState(initialBoardValue);
  let [turn, setTurn] = useState(0);
  let [result, setResult] = useState("");
  /* if turn == 0 /player 0
  or player x
   */
  useEffect(() => {}, [turn, board]);
  function handleClick(x, y) {
    console.log(x, y);
    let tempBoard = board;
    // check if already filler
    if (board[x][y] !== 0) return;
    if (turn % 2 === 0) {
      tempBoard[x][y] = -1;
      setBoard(tempBoard);
    } else {
      tempBoard[x][y] = 1;
      setBoard(tempBoard);
    }
    // check winner
    let rowFlag = false,
      colFlag = false,
      diagonalFlag = true,
      reverseDiagonal = true;
    let player = tempBoard[x][y];
    for (let i = 0; i < 3; i++) {
      if (tempBoard[i][y] !== player) {
        rowFlag = true;
      }
      if (tempBoard[x][i] !== player) {
        colFlag = true;
      }
      if (x === y) {
        if (tempBoard[i][i] !== player) {
          diagonalFlag = true;
        }
      }

      if (x === 2 - y) {
        if (tempBoard[i][2 - i] !== player) {
          reverseDiagonal = true;
        }
      }
    }
    console.log(rowFlag, colFlag, diagonalFlag, reverseDiagonal);
    if (!rowFlag || !colFlag || !diagonalFlag || !reverseDiagonal)
      setResult(`player ${turn % 2} is winner`);
    setTurn(turn + 1);
  }
  return (
    <div className="Board">
      <div style={{ display: "flex" }}>
        <div
          onClick={() => {
            handleClick(0, 0);
          }}
        >
          {board[0][0]}
        </div>
        <div
          onClick={() => {
            handleClick(0, 1);
          }}
        >
          {board[0][1]}
        </div>
        <div
          onClick={() => {
            handleClick(0, 2);
          }}
        >
          {board[0][2]}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          onClick={() => {
            handleClick(1, 0);
          }}
        >
          {board[1][0]}
        </div>
        <div
          onClick={() => {
            handleClick(1, 1);
          }}
        >
          {board[1][1]}
        </div>
        <div
          onClick={() => {
            handleClick(1, 2);
          }}
        >
          {board[1][2]}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          onClick={() => {
            handleClick(2, 0);
          }}
        >
          {board[2][0]}
        </div>
        <div
          onClick={() => {
            handleClick(2, 1);
          }}
        >
          {board[2][1]}
        </div>
        <div
          onClick={() => {
            handleClick(2, 2);
          }}
        >
          {board[2][2]}
        </div>
      </div>
      <div>
        <h3>{result}</h3>
      </div>
    </div>
  );
}
