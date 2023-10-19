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
  
  export async function POST(request) {
    try {
      const data = await request.json();
      
      if (!data?.newGame) {
        return {
          status: 400,
          body: JSON.stringify({ success: false, error: 'Fyll ut all nødvendig data' }),
        };
      }
    videoGames.push(data);
  
      return {
        status: 201,
        body: JSON.stringify({ success: true, data: videoGames }),
      };
    } catch (error) {
      return {
        status: 500,
        body: JSON.stringify({ success: false, error: 'Internal Server Error' }),
      };
    }
  }
  