import { Component, Input } from '@angular/core';
import { Pokemon } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})

export class PokemonCardComponent {

  @Input() pokemon: Pokemon;

  constructor() { }

}
