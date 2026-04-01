import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPage {
  protected readonly metrics = [
    { label: 'Orders in Queue', value: '148', trend: '+12% this week' },
    { label: 'Inventory Accuracy', value: '98.4%', trend: '+1.2% this month' },
    { label: 'Open Invoices', value: '32', trend: '6 due today' },
  ];

  protected readonly modules = [
    'Customer management',
    'Inventory tracking',
    'Procurement workflow',
    'Finance approvals',
  ];

  protected readonly activity = [
    'Purchase order #PO-1042 approved by finance',
    'Low stock alert triggered for industrial bearings',
    'Quarterly revenue snapshot refreshed',
  ];
}