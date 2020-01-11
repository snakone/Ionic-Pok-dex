import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { PokedexService } from '@app/core/services/pokedex/pokedex.service';
import { FilterService } from '@app/core/services/filter/filter.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})

export class FilterModalComponent implements OnInit, AfterViewInit {

  pokeTypes$: Observable<string[]>;
  selectedType: string;

  constructor(private _pokedex: PokedexService,
              private _filter: FilterService,
              private modal: ModalController) { }

  ngOnInit() {
    this.pokeTypes$ = this.getPokemonTypes();
  }

  ngAfterViewInit(): void {
    this.getSelectedType();
  }

  private getPokemonTypes(): Observable<string[]> {
    return this._pokedex.getTypes();
  }

  private getSelectedType(): void {
    this.selectedType = this._filter.selectedType;
  }

  filter(type: string): void {
    type === this.selectedType ? this._filter.setPokeType('all') : this._filter.setPokeType(type);
    this.modal.dismiss();
  }

}
