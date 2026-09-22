import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserInformationService } from '../services/user-information-service';
import Snackbar from 'awesome-snackbar';

export const trainerGuard: CanActivateFn = (route, state) => {
  const userInformationService = inject(UserInformationService);

  if (userInformationService.getUserRole() == 'trainer') {
    return true;
  } else {
    new Snackbar('You are not allowed to visit this page')
    return false;
  }
};
