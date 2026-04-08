import { ChangeDetectionStrategy, Component } from '@angular/core';

type TransactionType = 'PURCHASE' | 'SALE' | 'RESTOCK';
type TransactionStatus = 'Completed' | 'Pending' | 'In Transit';

interface InventoryMixItem {
  label: string;
  percent: number;
  barColor: string;
}

interface RecentActivityItem {
  id: string;
  entityIcon: string;
  entityBgColor: string;
  entityIconColor: string;
  entity: string;
  date: string;
  type: TransactionType;
  amount: string;
  status: TransactionStatus;
  statusColor: string;
}

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {
  protected readonly inventoryMix: InventoryMixItem[] = [
    { label: 'Steel Structures', percent: 42, barColor: '#455f88' },
    { label: 'Glass Facades', percent: 28, barColor: '#5d5d78' },
    { label: 'Composite Panels', percent: 18, barColor: '#546073' },
    { label: 'Hardware & Fasteners', percent: 12, barColor: '#ccdde4' },
  ];

  protected readonly recentActivity: RecentActivityItem[] = [
    {
      id: '#PO-88210',
      entityIcon: 'apartment',
      entityBgColor: '#dce4f0',
      entityIconColor: '#455f88',
      entity: 'Skyline Construction',
      date: 'Oct 24, 2023',
      type: 'PURCHASE',
      amount: '$24,400.00',
      status: 'Completed',
      statusColor: '#22c55e',
    },
    {
      id: '#SO-99124',
      entityIcon: 'architecture',
      entityBgColor: '#d8e3fa',
      entityIconColor: '#546073',
      entity: 'Horizon Architects',
      date: 'Oct 23, 2023',
      type: 'SALE',
      amount: '$12,850.00',
      status: 'Pending',
      statusColor: '#f59e0b',
    },
    {
      id: '#INV-1002',
      entityIcon: 'factory',
      entityBgColor: '#dbdafb',
      entityIconColor: '#5d5d78',
      entity: 'Steel-Fab Industries',
      date: 'Oct 23, 2023',
      type: 'RESTOCK',
      amount: '$145,000.00',
      status: 'In Transit',
      statusColor: '#455f88',
    },
  ];
}