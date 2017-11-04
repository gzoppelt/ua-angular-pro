import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {
  @HostBinding('style.border') border: string;
  @HostListener('input', ['$event']) onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }
    const numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }
    input.value = numbers.join(' ');

    this.border = /^[\d]+$/.test(trimmed) ? '3px solid blue' : '3px solid red';

  }
}
