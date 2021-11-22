import {Account} from './account';
import {AccountSettings} from './account-settings';

export interface LoggedInUser {
  id: number;
  account_id: number;
  account_options: AccountSettings;
  avatar: string;
  created_at: string;
  email: string;
  is_verified: boolean;
  name: string;
  permissions: string[];
  account: Account;
}
