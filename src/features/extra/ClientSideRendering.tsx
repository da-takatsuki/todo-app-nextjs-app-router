"use client";

import Image from "next/image";
import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const PokemonList: React.FC = () => {
  const { data, error } = useSWR("/api/pokemon", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

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
};

export default PokemonList;
