import { HOST_NAME } from "@/utils/variables";
import Image from "next/image";

export default async function StaticSiteGenerator() {
  const res = await fetch(`${HOST_NAME}/api/pokemon`);
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
