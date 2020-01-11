import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/shared/components/components.module';

import { SinglePokemonPageRoutingModule } from './single-pokemon-routing.module';
import { SinglePokemonPage } from './single-pokemon.page';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ComponentsModule,
    SinglePokemonPageRoutingModule
  ],
  declarations: [
    SinglePokemonPage,
    PokemonCardComponent
  ]
})

export class SinglePokemonPageModule {}
