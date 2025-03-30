import { Directive, ElementRef, inject, input, Input } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
  hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
  queryParam = input('my app', { alias: 'appSafeLink'})
  //cd 01 private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SaefLinkDirective is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');
    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam;
      return;
    } else {
      event.preventDefault();
    }
  }
}
