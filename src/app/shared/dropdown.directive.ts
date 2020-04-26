import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen: boolean = false;
  
  constructor(private elementRef: ElementRef, private renderer : Renderer2) { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    let dropdownMenu : ElementRef = this.elementRef.nativeElement.getElementsByClassName("dropdown-menu")[0];
    const dropdownShowClass: string = 'show';

    if(this.isOpen) {
      this.renderer.addClass(dropdownMenu, dropdownShowClass);
    }
    else {
      this.renderer.removeClass(dropdownMenu, dropdownShowClass);
    }
  }
}
