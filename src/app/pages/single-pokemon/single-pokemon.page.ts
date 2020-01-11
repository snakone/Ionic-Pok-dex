import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { takeUntil, switchMap } from 'rxjs/operators';
import { Subject, of } from 'rxjs';
import { PokedexService } from '@app/core/services/services.index';
import { HttpErrorResponse } from '@angular/common/http';
import { Pokemon } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.page.html',
  styleUrls: ['./single-pokemon.page.scss'],
})

export class SinglePokemonPage implements OnInit, OnDestroy {

  pokemon: Pokemon;
  private unsubscribe$ = new Subject<void>();
  loading = true;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private _pokedex: PokedexService) { }

  ngOnInit() {
    this.getPokemonByName();
  }

  private getPokemonByName(): void {
    this.activatedRoute.paramMap
    .pipe(switchMap((res: ParamMap) => {
        const pokeName = res.get('name');

        if (!pokeName) {
          this.router.navigateByUrl('home');
          return of(null);
        }

        return this._pokedex.getPokemonByName(pokeName);
    }), takeUntil(this.unsubscribe$))
    .subscribe((res: Pokemon) => {
      if (res) {
        this.pokemon = res;
        this.loading = false;
       }
    } , (err: HttpErrorResponse) => console.log(err));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
