import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDisableControl]'
})
export class DisableControlDirective {

   @Input('appDisableControl') set appDisableControl( condition : boolean ) { 
     this.r.setProperty(this.el.nativeElement, 'disabled', !condition);  
  }
  constructor(private el : ElementRef, private r:Renderer2) {}
}
