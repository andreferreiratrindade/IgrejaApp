import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'musicaFilter',
    pure: false
})
export class MusicaPipe implements PipeTransform {
    transform(items: any[], term): any {
        return items 
            ? items.filter(item => item.idPeriodo == term)
            : items;
    }
}