import {Directive, ElementRef, Renderer2, HostListener, Host} from '@angular/core';

@Directive({
  selector: '[appShowSuggestions]'
})

export class ShowSuggestionsDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'display', 'block');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setFontWeight('block');
  }

  private setFontWeight(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'display', val);
  }
}
