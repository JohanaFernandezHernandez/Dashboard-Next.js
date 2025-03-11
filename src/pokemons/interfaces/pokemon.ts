export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    cries: {
      latest: string;
      legacy: string;
    };
    forms: NamedAPIResource[];
    game_indices: GameIndex[];
    height: number;
    held_items: any[]; // Puedes tiparlo mejor si sabes la estructura
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_abilities: any[]; // Puedes tiparlo mejor si sabes la estructura
    past_types: any[]; // Puedes tiparlo mejor si sabes la estructura
    species: NamedAPIResource;
    sprites: any; // La estructura es bastante grande, puedes tiparla con Sprite si deseas
    stats: Stat[];
    types: PokemonType[];
    weight: number;
  }
  
  interface Ability {
    ability: NamedAPIResource;
    is_hidden: boolean;
    slot: number;
  }
  
  interface GameIndex {
    game_index: number;
    version: NamedAPIResource;
  }
  
  interface Move {
    move: NamedAPIResource;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: NamedAPIResource;
      version_group: NamedAPIResource;
    }[];
  }
  
  interface Stat {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
  }
  
  interface PokemonType {
    slot: number;
    type: NamedAPIResource;
  }
  
  interface NamedAPIResource {
    name: string;
    url: string;
  }
  