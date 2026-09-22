import { CanDeactivateFn } from '@angular/router';

export const canExitGuard: CanDeactivateFn<unknown> = (
  component:any,
  currentRoute,
  currentState,
  nextState,
) => {

  if(component.hasChanges){
    alert('plz save before you move out of this page')
    return false
  }else{
    return true;
  }
};
