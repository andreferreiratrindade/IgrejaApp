
import { Component, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})

export class AccordionComponent {
  @ViewChild("expandWrapper", { read: ElementRef }) expandWrapper: ElementRef;
  @Input("expanded") expanded: boolean = false;
  @Input("expandHeight") expandHeight: string = "150px";
 
    constructor(public renderer: Renderer2) {
 
    }
 
    ngAfterViewInit() {
      this.renderer.setStyle(
        this.expandWrapper.nativeElement,
        "max-height",
        this.expandHeight
      );
    }
  }