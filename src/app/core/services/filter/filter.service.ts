import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APP_CONSTANTS } from '@app/app.config';
import { HttpService } from '../http/http.service';
import { FilterResult } from '@app/shared/interfaces/interfaces';

@Injectable()

export class FilterService {

  readonly POKEDEX_API = APP_CONSTANTS.END_POINT;

  pokeType$ = new Subject<string>();
  selectedType: string;

  constructor(private http: HttpService) { }

  public setPokeType(type: string): void {
    this.pokeType$.next(type);
    this.selectedType = type;
  }

  public filterByType(type: string): Observable<FilterResult[]> {
    return this.http.get(this.POKEDEX_API + 'type/' + type)
           .pipe(map((res: any) => res.pokemon));
  }
}
