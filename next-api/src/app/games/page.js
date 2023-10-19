"use client"
import axios from "axios";
import { useState, useEffect } from "react";
export default function GamesPage(){
    const [games, setGames] = useState([])
    const getQuizzes = async () => {
            const response = await axios.get('/api/games')
            console.log(response?.data)
            setGames(response?.data)

    }
      useEffect(() => {
        getQuizzes()
      }, [])

return (
<section>
    <h1>Spill</h1>
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
