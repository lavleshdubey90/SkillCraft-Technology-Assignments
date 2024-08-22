import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { GoCircle } from 'react-icons/go';

const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    const renderSquare = (index) => (
        <div
            className={`box grid place-content-center ${board[index] ? 'cursor-default' : 'cursor-pointer'}`}
            onClick={() => handleClick(index)}
        >
            {board[index] === 'X' ? <RxCross2 className='text-9xl text-red-600' /> : board[index] === 'O' ? <GoCircle className='text-9xl text-blue-500' /> : null}
        </div>
    );

    const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

    return (
        <div className='text-center'>
            <h1 className='text-5xl text-emerald-500 text-center pt-20'>Tic Tac Toe Game</h1>
            <div className='py-10 flex flex-col justify-center items-center gap-y-1'>
                <div className='row flex flex-col gap-y-1'>

                    {Array.from({ length: 3 }).map((_, rowIndex) => (

                        <div key={rowIndex} className="flex gap-x-1">
                            {Array.from({ length: 3 }).map((_, colIndex) => (
                                <div key={colIndex} className="box flex">
                                    {renderSquare(rowIndex * 3 + colIndex)}
                                </div>
                            ))}

                        </div>
                    ))}

                </div>
                <div className='text-xl py-4 text-white'>{status}</div>
                <button
                    onClick={resetGame}
                    className='px-7 py-3 bg-emerald-500 hover:bg-emerald-600 duration-300 text-white w-fit rounded-md'
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

// Helper function to calculate the winner
const calculateWinner = (squares) => {
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
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default Board;
