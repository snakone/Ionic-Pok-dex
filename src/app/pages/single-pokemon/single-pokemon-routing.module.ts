import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglePokemonPage } from './single-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: SinglePokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class SinglePokemonPageRoutingModule {}
