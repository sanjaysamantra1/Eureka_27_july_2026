import { Service } from '@angular/core';

@Service()
export class UserInformationService {
  private userRole: string = 'student';

  getUserRole() {
    return this.userRole;
  }
}
