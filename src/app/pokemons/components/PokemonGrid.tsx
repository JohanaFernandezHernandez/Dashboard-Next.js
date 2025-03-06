
import type { SimplePokmon } from '../interfaces/simple-pokemon'
import { PokemCard } from "./PokemCard";

interface Props {
    pokemons: SimplePokmon[];
}


export const PokemonGrid = ({pokemons}: Props) => {

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
    {pokemons.map((pokemon) => (
         
        <PokemCard key={pokemon.id} pokemon={pokemon}/>
      
    ))}
  </div>
  )
}
