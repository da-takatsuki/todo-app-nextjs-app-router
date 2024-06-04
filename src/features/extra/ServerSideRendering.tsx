import { VERCEL_URL } from "@/utils/variables";
import Image from "next/image";

export default async function ServerSideRendering() {
  console.log("start");
  const res = await fetch(`${VERCEL_URL}/api/pokemon`, {
    cache: "no-store",
  });
  console.log("end");
  const data = await res.json();

  return (
    <div>
      <h1>Pokémon List</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.data.map((pokemon: any, index: any) => (
          <div key={index} style={{ margin: "10px", textAlign: "center" }}>
            <Image
              src={pokemon.image}
              width={200}
              height={200}
              alt={pokemon.name}
            />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
