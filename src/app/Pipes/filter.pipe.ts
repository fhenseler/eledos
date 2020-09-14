import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemTypeFilter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], value: string) {
    if('All Items' === value){
      return list;
    }
    else{
      return value ? list.filter(item => item.payload.doc.data().itemType === value) : list;
    }
  }
}


