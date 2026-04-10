import { ChangeDetectionStrategy, Component } from '@angular/core';

type UserRole = 'Admin' | 'Manager' | 'Viewer';
type UserStatus = 'Active' | 'Inactive';

interface UserRow {
  initials: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  lastActive: string;
}

@Component({
  selector: 'app-users-page',
  templateUrl: './users.page.html',
  styleUrl: './users.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPage {
  protected readonly userRows: readonly UserRow[] = [
    {
      initials: 'JD',
      name: 'Julianne Delacruz',
      email: 'j.delacruz@architectural.co',
      role: 'Admin',
      status: 'Active',
      lastActive: 'Just now',
    },
    {
      initials: 'MR',
      name: 'Marcus Ray',
      email: 'm.ray@architectural.co',
      role: 'Manager',
      status: 'Active',
      lastActive: '2 hours ago',
    },
    {
      initials: 'SB',
      name: 'Sarah Bennett',
      email: 's.bennett@architectural.co',
      role: 'Viewer',
      status: 'Inactive',
      lastActive: '3 days ago',
    },
    {
      initials: 'KL',
      name: 'Kevin Low',
      email: 'k.low@architectural.co',
      role: 'Manager',
      status: 'Active',
      lastActive: '15 mins ago',
    },
  ];

  protected readonly stats = {
    totalUsers: '1,284',
    activeNow: '42',
    pendingInvites: '12',
  } as const;
}
