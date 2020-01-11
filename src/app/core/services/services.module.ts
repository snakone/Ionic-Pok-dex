import { NgModule } from '@angular/core';

import {
  HttpService,
  PokedexService,
  FilterService
 } from './services.index';

@NgModule({
  providers: [
    HttpService,
    PokedexService,
    FilterService
  ]
})

export class ServicesModule { }
