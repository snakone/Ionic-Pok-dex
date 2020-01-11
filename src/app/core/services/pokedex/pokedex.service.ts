import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http/http.service';
import { Observable } from 'rxjs';

import { APP_CONSTANTS } from '@app/app.config';
import { APIResponse, Pokemon } from '@app/shared/interfaces/interfaces';
import { map } from 'rxjs/operators';

@Injectable()

export class PokedexService {

  readonly POKEDEX_API = APP_CONSTANTS.END_POINT;
  private itemsPage = 20;
  private offset = 0;

  constructor(private http: HttpService) { }

  public getPokedex(): Observable<APIResponse> {
    this.offset += this.itemsPage;
    const params = `pokemon?offset=${this.offset - this.itemsPage}&limit=${this.itemsPage}`;
    return this.http.get(this.POKEDEX_API + params);
  }

  public getTypes(): Observable<string[]> {
    return this.http.get(this.POKEDEX_API + 'type')
           .pipe(map((res: APIResponse) => res.results.map(result => result.name)));
  }

  public getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get(this.POKEDEX_API + 'pokemon/' + name)
           .pipe(map((res: Pokemon) => {
             const poke: Pokemon = {
               id: res.id,
               name: res.name,
               species: res.species,
               height: res.height / 10,
               weight: res.weight / 10,
              sprites: res.sprites
            };
              return poke;
    }));
  }

  public resetCount(): void {
    this.offset = 0;
  }
}
