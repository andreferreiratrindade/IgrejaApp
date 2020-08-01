import { NgModule } from '@angular/core';
import { MaskTelefonePipe } from './mask-telefone.pipe';
import { IonicModule } from '@ionic/angular';
import { SortByPipe } from './sortBy/sort-by.pipe';

@NgModule({
    declarations: [
        MaskTelefonePipe,
        SortByPipe
     
    ],
    imports: [
        IonicModule
    ],
    exports: [
        MaskTelefonePipe,
        SortByPipe
    ]
  })
  export class PipesModule {
    static forRoot() {
        return {
            ngModule: PipesModule,
            providers: [],
        };
     }
  }