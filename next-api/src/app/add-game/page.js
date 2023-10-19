"use client"
import axios from "axios";
import { useState, useEffect } from "react";

export default function AddGamePage(){
    const [games, setGames] = useState([])
    const [error, setError] = useState("")
    const [newGame, setNewGame] = useState('')
    
    const getGames = async () => {
        const response = await axios.get('/api/games')
        console.log(response?.data)
        setGames(response?.data)

}
   /* const postGames = async () => {
            const response = await axios.post('/api/games', { newGame })
            setGames(response?.data)
          
    }
*/
      useEffect(() => {
        getGames()
      }, [])

      const handleNewGame = (event) =>{
        setNewGame(event.target.value)
      }
      const handleOnSubmit = async (event) =>{
        event.preventDefault()
        await postGames()
      }

return (
<section>
    <h1>Spill</h1>
    <form onSubmit={handleOnSubmit}>
        <label htmlFor="add-game">Legg til spill</label>
        <input type="text" name="add-game" value={newGame} onChange={handleNewGame}/>
        <button type="submit">Legg til spill</button>
    </form>
    {games?.map((game) => <article key={game.title}>
        <h3>{game.title}</h3>
        <ul>
            <li>{game.genre}</li>
            <li>{game.multiplayer ? "Multiplayer" : "Singelplayer"}</li>
            <ul>
                {game.series.map((serie, i) => <li key={serie}>{serie}</li>)}
            </ul>
           
        </ul>

    </article>)}
</section>)}
