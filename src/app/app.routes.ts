import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/pages/login.page';
import { DashboardPage } from './features/dashboard/dashboard.page';
import { InventoryPage } from './features/inventory/pages/inventory.page';
import { AppShellComponent } from './layouts/app-shell/app-shell.component';

export const routes: Routes = [
	{
		path: 'login',
		component: LoginPage,
		title: 'Curator ERP | Login',
	},
	{
		path: '',
		component: AppShellComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'dashboard',
			},
			{
				path: 'dashboard',
				component: DashboardPage,
				title: 'Curator ERP | Dashboard',
			},
			{
				path: 'inventory',
				component: InventoryPage,
				title: 'Curator ERP | Inventory',
			},
		],
	},
	{
		path: '**',
		redirectTo: '',
	},
];
