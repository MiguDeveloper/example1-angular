import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective {
  @Input('appResaltado') color: string;

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') mouseEntro() {
    this.cambiaColor(this.color || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio() {
    this.elementRef.nativeElement.style.backgroundColor = 'white';
  }
  cambiaColor(colour: string) {
    this.elementRef.nativeElement.style.backgroundColor = colour;
  }
}
