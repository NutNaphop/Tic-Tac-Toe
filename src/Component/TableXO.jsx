import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { FormName } from './FormName';

const conditionWin = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [4, 5, 6],
    [7, 8, 9]
]

const defaultHistoryTable = ['', '', '', '', '', '', '', '', ''];

function TableXO({ player1, player2 , isPlaying , setIsPlaying , turn , setTurn , setScore1 , setScore2}) {
    const [winner, setWinner] = useState('')
    const [sign, setSign] = useState('X')
    const [status, setStatus] = useState('')
    const [historyTable, setHistoryTable] = useState(defaultHistoryTable)
    const [isStart , setIsStart] = useState(false)
    
    const handleClick = async (cell) => {
        if (historyTable[cell] !== '' || !isPlaying) return; // Check if cell is already filled or game is not playing
        const newHistoryTable = [...historyTable];
        newHistoryTable[cell] = sign;
        setHistoryTable(newHistoryTable);
        setSign(sign === 'X' ? 'O' : 'X');
        if(isPlaying === true){
            setTurn(turn === 'p1' ? 'p2' : 'p1');
        }
        
    }

    const checkWinner = (sign) => {
        for (let i = 0; i < conditionWin.length; i++) {
            const condition = conditionWin[i];
            const [a, b, c] = condition;
            if (historyTable[a - 1] && historyTable[a - 1] === historyTable[b - 1] && historyTable[a - 1] === historyTable[c - 1]) {
                return sign === 'X' ? player1 : player2;
            }
        }
        return null;
    }

    const restartGame = () => {
        setHistoryTable(defaultHistoryTable);
        setWinner('');
        setSign('X');
        setStatus('');
        setTurn('p1');
        setIsPlaying(true);
    }

    const startGame = () => {
        setIsPlaying(true);
        setIsStart(true);
        setTurn('p1');
        restartGame();
    }
    
    useEffect(() => {
        if (isPlaying) {
            const gameWinner = checkWinner(sign === 'X' ? 'O' : 'X');
            if (gameWinner) {
                setWinner(gameWinner);
                setStatus('Win!');
                setIsPlaying(false);
                if (gameWinner === player1) {
                    setScore1(prev => prev + 1);
                } else {
                    setScore2(prev => prev + 1);
                }
                setTurn(turn === 'p1' ? 'p2' : 'p1');
            } else if (!historyTable.includes('')) {
                setStatus('Draw');
                setWinner('');
                setIsPlaying(false);
                setTurn(turn === 'p1' ? 'p2' : 'p1');
            }
        }
    }, [historyTable]);

    useEffect(() => {
        setIsPlaying(false);
        setSign('X');
        setIsStart(false);
    }, []);

    return (
        <div className='flex flex-col items-center justify-center space-y-5'>
            <h1 className='text-center text-4xl font-bold'>
                {isPlaying ? (turn === 'p1' ? player1 + " Turn" : player2 + " Turn") : winner}
            </h1>
            <div className='grid grid-cols-3'>
                {
                    Array.from({ length: 9 }).map((_, index) => (
                        <div className='flex justify-center items-center h-16 w-16 border-2 border-black hover:bg-gray-100 md:h-32 md:w-32 md:text-4xl md:font-bold'
                            onClick={() => handleClick(index)}
                            key={index}>
                            <h1 className='text-6xl font-bold'>
                                {historyTable[index]}
                            </h1>
                        </div>
                    ))
                }
            </div>

            <h1 className='text-2xl font-bold p-4'>
                {status ? `${winner} ${status}` : ''}
            </h1>

            <div className="flex justify-center space-x-5">
                {
                    !isStart && <FormName startGame={startGame} />
                }
                <Button onClick={restartGame}>Restart Table</Button>
            </div>
        </div>
    )
}

export default TableXO
