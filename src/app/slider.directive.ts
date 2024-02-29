import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSlider]',
})
export class SliderDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  imageChange() {
    var src: any = this.el.nativeElement.src;
    var prev: any = document.getElementById('preview');
    prev.src = src;
    var imageslide = document.getElementsByClassName('img-slide');
    for (let i = 0; i < imageslide.length; i++) {
      imageslide[i].classList.remove('active');
    }
    this.el.nativeElement.parentElement.classList.add('active');
  }
}
