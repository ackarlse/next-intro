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
          // tar i mot data som sendes med forespørselen
      const data = req.body
          
          // legger til data i quiz listen vår
      videoGames.push(data)
          
          // sender status 201 (Created) og den nye oppdaterte listen
      res.status(201).json({ success: true, data: videoGames })
    } else {
      res.status(200).json({ success: true, data: videoGames })
    }
  }
  
  /*export async function POST(req, res) {
    if (req.method === 'POST') {
      try {
        const data = req.body;
        if (!data?.newGame) {
          res.status(400).json({ success: false, error: 'Fyll ut all nødvendig data' });
        } else {
          videoGames.push(data);
          res.status(201).json({ success: true, data: videoGames });
        }
      } catch (error) {
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      }
    } else if (req.method === 'PUT') {
      res.status(405).end();
    } else {
      res.status(200).json({ success: true, data: videoGames });
    }
  }*/