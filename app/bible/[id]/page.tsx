import React from 'react';

type BiblePageProps = {
  params: { id: string };
};

type Pokemon = {
  name: string;
  id: number;
  weight: number;
};

const fetchPokemon = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return await response.json();
};

export default async function Bible({ params }: BiblePageProps) {
  const fetchedPokemonById = await fetchPokemon(params.id);
  const newPokemon: Pokemon = { ...fetchedPokemonById };

  return (
    <div>
      New Pokemon: <br></br>
      {newPokemon.id}: {newPokemon.name}, weighs: {newPokemon.weight}lbs.
    </div>
  );
}
