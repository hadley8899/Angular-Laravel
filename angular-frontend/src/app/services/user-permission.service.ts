import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPermissionService {

  userPermissions: string[] = [];

  constructor() {
  }

  hasPermissionTo(permission: string) {
    if (this.userPermissions.length === 0) {
      this.initPermissions();
    }

    return this.userPermissions.includes(permission);
  }

  initPermissions() {

    let userData = localStorage.getItem('userData');

    if (userData === null) {
      return;
    }

    const loggedInUser = JSON.parse(userData);

    if (loggedInUser) {
      this.userPermissions = loggedInUser.permissions;
    }
  }
}
