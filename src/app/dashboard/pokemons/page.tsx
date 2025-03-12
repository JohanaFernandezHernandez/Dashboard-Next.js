import { PokemonGrid, PokemonsResponse, SimplePokmon } from "@/pokemons";


export const metadata = {
 title: '151pokemons',
 description: '151pokemons',
};


const getPokemons = async (limit = 20, ofset = 0): Promise<SimplePokmon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${ofset}`
  ).then((resp) => resp.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokémon <small>estático</small>
      </span>

      <PokemonGrid pokemons={ pokemons }/>

   
    </div>
  );
}
