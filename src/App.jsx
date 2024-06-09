import { createContext, useState } from "react"
import TableXO from "./Component/TableXO"
export const AppContext = createContext(null)

function App() {

  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')
  const [score1, setScore1] = useState(0)
  const [score2, setScore2] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [turn, setTurn] = useState()


  return (

    <div className="w-full h-screen flex flex-col justify-center">
      <div className="flex flex-col space-y-10 justify-center w-full md:flex-row md:space-y-0 md:justify-between">


        <div className="flex flex-row justify-center space-x-10 md:hidden">
            <div className="flex flex-col items-center">
              {
                turn === 'p1'
                  ? <h1 className="text-3xl font-bold underline text-blue-700">{player1}</h1>
                  : <h1 className="text-3xl font-bold">{player1}</h1>
              }

              <h1 className="text-2xl">Score</h1>
              <h1 className="text-6xl font-extrabold">{score1}</h1>
            </div>

            <div className="flex flex-col items-center">
              {
                turn === 'p2'
                  ? <h1 className="text-3xl font-bold underline text-red-700">{player2}</h1>
                  : <h1 className="text-3xl font-bold">{player2}</h1>
              }
              <h1 className="text-2xl">Score</h1>
              <h1 className="text-6xl font-extrabold">{score2}</h1>
            </div>    
        </div>


        <div className="hidden flex-1 flex-col items-center md:flex">
          {
            turn === 'p1'
              ? <h1 className="text-3xl font-bold underline text-blue-700">{player1}</h1>
              : <h1 className="text-3xl font-bold">{player1}</h1>
          }

          <h1 className="text-2xl">Score</h1>
          <h1 className="text-9xl font-extrabold">{score1}</h1>
        </div>

        <div className="flex flex-1 justify-center">
          <AppContext.Provider value={{ setPlayer1, setPlayer2 }}>
            <TableXO
              player1={player1}
              player2={player2}
              isPlaying={isPlaying}
              turn={turn}
              setTurn={setTurn}
              setIsPlaying={setIsPlaying}
              setScore1={setScore1}
              setScore2={setScore2}
            />
          </AppContext.Provider>
        </div>

        <div className="hidden flex-1 flex-col items-center md:flex">
          {
            turn === 'p2'
              ? <h1 className="text-3xl font-bold underline text-red-700">{player2}</h1>
              : <h1 className="text-3xl font-bold">{player2}</h1>
          }
          <h1 className="text-2xl">Score</h1>
          <h1 className="text-9xl font-extrabold">{score2}</h1>
        </div>
      </div>
    </div>



  )
}

export default App