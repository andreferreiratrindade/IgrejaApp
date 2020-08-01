import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskTelefone'
})
export class MaskTelefonePipe implements PipeTransform {

  transform(rawNum:any) {
    let value : string;
    let valueStr = rawNum ? rawNum.toString() : null;
    if(valueStr && valueStr.toString().length == 11){
      value = "("+ valueStr.substring(0,2) + ") "+valueStr.substring(2,7)+"-"+valueStr.substring(7,11);
    }
    if(valueStr && valueStr.toString().length == 10){

      value = "("+ valueStr.substring(0,2) + ") "+valueStr.substring(2,6)+"-"+valueStr.substring(6,10);
    }
    
    return value;
  }
}
