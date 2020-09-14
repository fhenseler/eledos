import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serverFilter'
})
export class ServerFilterPipe implements PipeTransform {

  transform(list: any[], value: string) {
    if('All Servers' === value){
      return list;
    }
    else{
      return value ? list.filter(item => item.payload.doc.data().server === value) : list;
    }
  }
}