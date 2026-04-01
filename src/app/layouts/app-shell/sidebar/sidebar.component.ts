import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type SidebarNavItem = {
  label: string;
  path: string;
};

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  readonly applicationName = input.required<string>();
  readonly navigation = input.required<readonly SidebarNavItem[]>();
  readonly currentYear = input.required<number>();
}
