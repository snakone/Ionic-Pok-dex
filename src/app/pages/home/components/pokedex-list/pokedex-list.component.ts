import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';

import { PokedexResult, FilterResult } from '@shared/interfaces/interfaces';
import { APIResponse } from '@app/shared/interfaces/interfaces';
import { PokedexService } from '@app/core/services/pokedex/pokedex.service';
import { FilterService } from '@app/core/services/filter/filter.service';

import { switchMap, takeUntil } from 'rxjs/operators';
import { Subject, of } from 'rxjs';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})

export class PokedexListComponent implements OnInit, OnDestroy {

  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;
  pokedex: PokedexResult[];
  loading = true;
  selectedType: string;
  private unsubscribe$ = new Subject<void>();

  constructor(private _pokedex: PokedexService,
              private _filter: FilterService) { }

  ngOnInit() {
    this.getPokedex();
    this.listenToFilter();
  }

  private getPokedex(): void {
    this._pokedex.getPokedex()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: APIResponse) => {
      this.pokedex = this.setPokemonSprites(res.results);
      this.loading = false;
    }, (err: HttpErrorResponse) => console.log(err));
  }

  loadMoreData(event: any): void {
    this._pokedex.getPokedex()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: APIResponse) => {
      if (!res.next) {
        event.target.disabled = true;
        return;
      }

      res.results = this.setPokemonSprites(res.results);
      this.pokedex = [...this.pokedex, ...res.results];
      this.infiniteScroll.complete();
    }, (err: HttpErrorResponse) => console.log(err));
  }

  private listenToFilter(): void {
    this._filter.pokeType$
    .pipe(
      switchMap((type: string) => {
        if (!type || type === 'all') {
          this._pokedex.resetCount();
          this.getPokedex();
          this.selectedType = null;
          return of(null);
        }

        this.loading = true;
        this.selectedType = type;

        return this._filter.filterByType(type);
      }),
      takeUntil(this.unsubscribe$))
    .subscribe((res: FilterResult[]) => {
      if (res) {
        const pokes = res.map(poke => poke.pokemon);
        this.pokedex = this.setPokemonSprites(pokes);
        this.loading = false;
      }
    }, (err: HttpErrorResponse) => console.log(err));
  }

  private setPokemonSprites(pokes: PokedexResult[]): PokedexResult[] {
    pokes.forEach((poke: PokedexResult) => {
      const array = poke.url.split('/');
      const pokeNumber = array.splice(array.length - 2, 1);
      poke.number = Number(pokeNumber);
    });
    return pokes;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
