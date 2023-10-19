"use client"
import axios from 'axios';
import { useState, useEffect } from "react";

export default function AddGamePage() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [newGame, setNewGame] = useState('');

  const getGames = async () => {
    try {
      const response = await axios.get('/api/games');
      setGames(response?.data);
    } catch (error) {
        setError("Error posting data: " + error.message);
      }
  }

  const postGames = async () => {
    try {
      const response = await axios.post('/api/games', {newGame});
      setGames(response?.data);
    } catch (error) {
        setError("Error posting data: " + error.message);
      }
  }

  useEffect(() => {
    getGames()
  }, [])

  const handleNewGame = (event) => {
    setNewGame(event.target.value);
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    await postGames('api/games');
  }

  return (
    <section>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="new-game">Legg til spill</label>
        <input type="text" id="new-game" name="game" onChange={handleNewGame} value={newGame}></input>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
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
    </section>
  );
}
