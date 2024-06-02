import { NextRequest, NextResponse } from "next/server";

interface Pokemon {
  name: string;
  image: string;
}

const fetchPokemon = async (id: number): Promise<Pokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon with ID ${id}`);
  }
  const data = await response.json();
  return { name: data.name, image: data.sprites.front_default };
};

export async function GET(
  req: Request | NextRequest,
  res: NextResponse<Pokemon>
) {
  const dataNum = 80;

  try {
    const promises = [];
    for (let i = 1; i <= dataNum; i++) {
      promises.push(await fetchPokemon(i));
    }
    const results = await Promise.all(promises);

    return Response.json({ data: results });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
}
