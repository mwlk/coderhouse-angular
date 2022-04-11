import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'club',
})
export class ClubPipe implements PipeTransform {
  transform(value: unknown, args: string): string {
    let club: string = '';

    switch (args) {
      case '0':
        club = 'Barcelona';
        break;
      case '11':
        club = 'Real Madrid';
        break;
      case '6':
        club = 'Chelsea';
        break;
      case '3':
        club = 'Juventus';
        break;

      case '100':
        club = 'Bayern';
        break;
      default:
        club = 'Manchester United';
        break;
    }

    return club;
  }
}
