import { Directive, HostListener } from '@angular/core';
import Snackbar from 'awesome-snackbar';

@Directive({
  selector: '[appDisableCopyPaste]',
})
export class DisableCopyPaste {
  @HostListener('copy', ['$event'])
  @HostListener('paste', ['$event'])
  onCopyOrPatse(event: any) {
    console.log('event ', event.type);
    new Snackbar('You cannt copy/paste on this input box',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
    event.preventDefault();
  }
}
