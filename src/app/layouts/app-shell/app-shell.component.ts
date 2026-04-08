import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidebarComponent, SidebarNavItem } from './sidebar/sidebar.component';

@Component({
  selector: 'app-app-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SidebarComponent],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent {
  protected readonly navigation: readonly SidebarNavItem[] = [
    { icon: 'dashboard', label: 'Dashboard', path: '/dashboard', exact: true },
    { icon: 'inventory_2', label: 'Inventory', path: '/inventory' },
    { icon: 'receipt_long', label: 'Sales Orders', path: '/sales' },
    { icon: 'manage_accounts', label: 'User Management', path: '/people' },
  ];
}
