import { NextRequest, NextResponse } from "next/server"
const videoGames = [
    {
      title: "Super Mario Bros.",
      genre: "Platformer",
      multiplayer: false,
      platform: "Nintendo Switch",
      series: ["Super Mario 64", "Super Mario Odyssey"]
    },
    {
      title: "The Legend of Zelda: Breath of the Wild",
      genre: "Action-Adventure",
      multiplayer: false,
      platform: "Nintendo Switch",
      series: ["The Legend of Zelda"]
    },
    {
      title: "Grand Theft Auto V",
      genre: "Action",
      multiplayer: true,
      platform: "PlayStation 5",
      series: []
    },
    {
      title: "Assassin's Creed: Valhalla",
      genre: "Action-Adventure",
      multiplayer: true,
      platform: "Xbox Series X",
      series: ["Assassin's Creed II", "Assassin's Creed: Black Flag"]
    },
  ]

  export function GET() {
    return NextResponse.json(videoGames, { status: 200 })
  }
  export default function handler(req, res) {
    if (req.method === 'POST') {
      const data = req.body
      videoGames.push(data)
      res.status(201).json({ success: true, data: videoGames })
    } else {
      res.status(200).json({ success: true, data: videoGames })
    }
  }
  
 