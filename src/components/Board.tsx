import React, { ReactElement, useState } from "react"
import {Square} from "./Square";
import { patterns } from "./patterns";

let winnerSquares:Array<number>


export function Board():ReactElement{
  const [board, setBoard] = useState<Array<string>>(Array(9).fill(null))
  const [player,setPlayer] = useState<boolean>(true)
  let game: ReactElement
  let squares: ReactElement
  const handleClick = (i:number):void =>{
    const squares = board.slice()
    if (calculateWinner(squares) || squares[i]){
      return
    }
    squares[i] = player ? 'X' : 'O'
    setPlayer(!player)
    setBoard(squares)
  } 
  if (calculateWinner(board)){
    squares = 
    <>      
      {board.map((value, key) => {
          return (winnerSquares.includes(key)) 
          ? <Square state={value} key={key} bkgColor = 'bg-green-300' onClick={() => handleClick(key)}></Square>
          : <Square state={value} key={key} bkgColor = {value ? 'bg-orange-500' :'bg-sky-400'} onClick={() => handleClick(key)}></Square>
        }
      )}
    </>
    game = (
      <>
        <p className='text-4xl mt-[30px] text-green-300'>Winner: {calculateWinner(board)}</p>
        <button className="rounded-full mt-[40px] w-[200px] h-[50px] border-none bg-sky-400 hover:shadow-[0_0_10px_10px_#fc9608] hover:bg-orange-500"
          onClick={() => setBoard(Array(9).fill(null))}>
          <p className="text-2xl text-white ">New Game</p>
        </button>
      </> 
      
    )
  }
  else{
    squares = 
      <>
        {board.map((value, key) => 
          <Square state={value} key={key} bkgColor = {value ? 'bg-orange-500' :'bg-sky-400'} onClick={() => handleClick(key)}></Square>
        )}
      </>
    game = (
      <>
        <p className='text-4xl mt-[30px] text-amber-500'>Next: {player ? 'X' : 'O'}</p>
        <button className="rounded-full mt-[40px] w-[200px] h-[50px] border-none bg-sky-400 hover:shadow-[0_0_10px_10px_#fc9608] hover:bg-orange-500"
          onClick={() => setBoard(Array(9).fill(null))}>
          <p className="text-2xl text-white ">New Game</p>
        </button>
      </>
    )
  }
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 w-[300px] h-[300px] ">
        {squares}
      </div>
      {game}  
    </>
    
  )
}

function calculateWinner(squares:Array<string>):string | null{
  for (let i:number = 0; i < patterns.length; i++){
    const [a, b, c] = patterns[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      winnerSquares = [a, b, c]
      return squares[a]
    }
  }
  return null
}