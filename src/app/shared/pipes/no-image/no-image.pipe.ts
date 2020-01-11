import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'noImage'})

export class NoImagePipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    if (!value) { return 'assets/img/no-img.png'; }
    return value;
  }

}
