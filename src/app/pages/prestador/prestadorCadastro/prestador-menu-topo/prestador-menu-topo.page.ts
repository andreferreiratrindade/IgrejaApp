import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prestador-menu-topo',
  templateUrl: './prestador-menu-topo.page.html',
  styleUrls: ['./prestador-menu-topo.page.scss'],
})
export class PrestadorMenuTopoPage implements OnInit {
 @Input() valorMenu : any;
  constructor() { console.log(this.valorMenu) }

  ngOnInit() {
    console.log(this.valorMenu)
  }

  segmentChanged(event){

  }
}
