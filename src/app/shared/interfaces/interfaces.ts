export interface APIResponse {
 count: number;
 next?: string;
 previous?: string;
 results: PokedexResult[];
}

export interface PokedexResult {
 name: string;
 url: string;
 number?: number;
}

export interface FilterResult {
 pokemon: PokedexResult;
 slot?: number;
}

export interface Pokemon {
 id: number;
 name: string;
 species: PokedexResult;
 height: number;
 weight: number;
 sprites: Sprite;
}

interface Sprite {
 back_default: string;
 front_default: string;
}
