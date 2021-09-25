import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): any {
  let data=value.split('');
  let result=[];
  for(let i=0;i<data.length;i++){
    if(data[i]=='#'){
      result.push('$');
    }else{
      result.push(data[i])
    }
  }
    return result.join('');
  }
}