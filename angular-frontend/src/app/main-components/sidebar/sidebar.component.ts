import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {AuthService} from '../../services/auth.service';
import {LoggedInUser} from '../../interfaces/logged-in-user';
import {UserPermissionService} from '../../services/user-permission.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  apiUrl = environment.apiUrl;
  loggedInUser!: LoggedInUser;

  profileImage = 'assets/img/blank.png';
  accountAvatar = 'assets/img/AdminLTELogo.png';
  accountName = '...';

  constructor(
    private authService: AuthService,
    private userPermissionService: UserPermissionService,
  ) {
  }

  ngOnInit() {
    this.authService.loggedInUser().subscribe((res: any) => { // TODO maybe add an interface to this response
      this.loggedInUser = res;
      if (this.loggedInUser.avatar) {
        this.profileImage = this.apiUrl + 'storage/' + res.avatar;
      }
      if (this.loggedInUser.account.avatar) {
        this.accountAvatar = this.apiUrl + 'storage/' + this.loggedInUser.account.avatar;
      }
      this.accountName = this.loggedInUser.account.name;
    });
  }

  hasPermission(permission: string) {
    return this.userPermissionService.hasPermissionTo(permission);
  }
}
