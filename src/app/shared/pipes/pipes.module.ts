import { NgModule } from '@angular/core';
import { SpritePipe } from './sprites/sprite.pipe';
import { NoImagePipe } from './no-image/no-image.pipe';

@NgModule({
  declarations: [
    SpritePipe,
    NoImagePipe
  ],
  exports: [
    SpritePipe,
    NoImagePipe
  ]
})

export class PipesModule { }
