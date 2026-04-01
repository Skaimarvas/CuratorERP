import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent, SidebarNavItem } from './sidebar/sidebar.component';

@Component({
  selector: 'app-app-shell',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent {
  protected readonly applicationName = 'Curator ERP';
  protected readonly navigation: readonly SidebarNavItem[] = [
    { label: 'Dashboard', path: '/' },
    { label: 'Sales', path: '/' },
    { label: 'Inventory', path: '/' },
    { label: 'Purchasing', path: '/' },
    { label: 'Finance', path: '/' },
    { label: 'People', path: '/' },
  ];
  protected readonly currentYear = new Date().getFullYear();
}
