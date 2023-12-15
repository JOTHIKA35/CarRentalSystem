import { SliderDirective } from './slider.directive';
import { ElementRef } from '@angular/core';

describe('SliderDirective', () => {
  it('should create an instance', () => {

    const mockElementRef: ElementRef<any> = {
      nativeElement: null
    };
    const directive = new SliderDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
