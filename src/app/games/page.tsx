'use client'
import { ChangeEvent, useEffect, useState } from "react"
type Game ={
    title: string,
    genre: string,
    multiplayer: boolean,
    platform: string,
    series: []
}

const GamePage =()=>{
    const [games, setGames] = useState<Game>()
    const [newGame, setNewGame] = useState('')
    
    const getGames = async()=>{
        const response = await fetch('/api/games', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              }
        }) as any
        const result = await response.json()
        setGames(result?.data)
    }

    const handleSubmit = async(e: ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault()
        try {
            const response = await fetch("/api/games", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  }, 
                  body: JSON.stringify({ newGame }),
            })
            const {data} = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    console.log(games)

    useEffect(()=>{getGames()},[])
    return (
        <section>
            <h1>Spill</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="game" value={newGame} onChange={(e) => setNewGame(e.target.value)}></input>
                <button>Legg til spill</button>
            </form>
        </section>

    )

}
export default GamePage