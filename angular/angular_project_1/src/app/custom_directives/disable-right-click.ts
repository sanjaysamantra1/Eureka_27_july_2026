import { Directive, HostListener } from '@angular/core';
import Snackbar from 'awesome-snackbar';

@Directive({
  selector: '[appDisableRightClick]',
})
export class DisableRightClick {
  @HostListener('contextmenu', ['$event'])
  onCopyOrPatse(event: any) {
    event.preventDefault();
    new Snackbar('Right Click is not allowed',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }
}
