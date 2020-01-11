import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sprite'})

export class SpritePipe implements PipeTransform {

  constructor() { }

  transform(value: number, ...args: any[]): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${value}.png`;
  }

}
