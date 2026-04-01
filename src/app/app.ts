import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly applicationName = 'Curator ERP';
  protected readonly navigation = [
    { label: 'Dashboard', path: '/' },
    { label: 'Sales', path: '/' },
    { label: 'Inventory', path: '/' },
    { label: 'Purchasing', path: '/' },
    { label: 'Finance', path: '/' },
    { label: 'People', path: '/' },
  ];
  protected readonly currentYear = new Date().getFullYear();
}
