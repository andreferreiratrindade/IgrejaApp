import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable()
export class Validator {

   constructor()
   {

   }


  public static validateCheckboxes(boxes: FormControl)
   {
      var valid : boolean = false,
          k     : any;


      for (k in boxes.value)
      {
         var val = boxes.value[k];

         if (val)
         {
            valid = true;
            break;
         }
      }

      if (valid)
      {
         return null;
      }

      return {
         checkboxRequired: true
      };
   }



}