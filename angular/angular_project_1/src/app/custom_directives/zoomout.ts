import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomout]',
})
export class Zoomout {
  constructor(private ele: ElementRef) {
    console.log(this.ele)
  }
  // Dependency Injection
  // creating instance of ElementRef Class

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.transform = 'scale(100%,105%)';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.transform = 'scale(100%)';
  }
}
