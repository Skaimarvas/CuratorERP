import { ChangeDetectionStrategy, Component } from '@angular/core';

type StatTone = 'primary' | 'tertiary' | 'secondary' | 'error';
type DeltaTone = 'positive' | 'neutral' | 'negative';
type CustomerTone = 'primary' | 'secondary' | 'tertiary' | 'error';
type OrderStatus = 'Processing' | 'Delivered' | 'Shipped' | 'Cancelled';
type OrderStatusTone = 'processing' | 'delivered' | 'shipped' | 'cancelled';

interface SalesStat {
  label: string;
  value: string;
  delta: string;
  accentTone: StatTone;
  deltaTone: DeltaTone;
}

interface SalesOrderRow {
  id: string;
  customerInitials: string;
  customerName: string;
  customerTone: CustomerTone;
  date: string;
  totalAmount: string;
  status: OrderStatus;
  statusTone: OrderStatusTone;
}

@Component({
  selector: 'app-sales-orders-page',
  templateUrl: './sales-orders.page.html',
  styleUrl: './sales-orders.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesOrdersPage {
  protected readonly stats: readonly SalesStat[] = [
    {
      label: 'Total Volume',
      value: '1,284',
      delta: '+12%',
      accentTone: 'primary',
      deltaTone: 'positive',
    },
    {
      label: 'Active Processing',
      value: '42',
      delta: '—',
      accentTone: 'tertiary',
      deltaTone: 'neutral',
    },
    {
      label: 'Shipped Today',
      value: '156',
      delta: '+4.5%',
      accentTone: 'secondary',
      deltaTone: 'positive',
    },
    {
      label: 'Critical Delay',
      value: '3',
      delta: '-2%',
      accentTone: 'error',
      deltaTone: 'negative',
    },
  ];

  protected readonly orders: readonly SalesOrderRow[] = [
    {
      id: 'SO-89231',
      customerInitials: 'SM',
      customerName: 'Solstice Media Group',
      customerTone: 'primary',
      date: 'Oct 24, 2023',
      totalAmount: '$12,450.00',
      status: 'Processing',
      statusTone: 'processing',
    },
    {
      id: 'SO-89228',
      customerInitials: 'AL',
      customerName: 'Apex Logistics',
      customerTone: 'secondary',
      date: 'Oct 23, 2023',
      totalAmount: '$3,820.50',
      status: 'Delivered',
      statusTone: 'delivered',
    },
    {
      id: 'SO-89224',
      customerInitials: 'NK',
      customerName: 'Nordic Kitchens',
      customerTone: 'tertiary',
      date: 'Oct 22, 2023',
      totalAmount: '$942.00',
      status: 'Shipped',
      statusTone: 'shipped',
    },
    {
      id: 'SO-89219',
      customerInitials: 'CV',
      customerName: 'Cloud Ventures',
      customerTone: 'error',
      date: 'Oct 21, 2023',
      totalAmount: '$1,500.00',
      status: 'Cancelled',
      statusTone: 'cancelled',
    },
    {
      id: 'SO-89215',
      customerInitials: 'TM',
      customerName: 'Terra Materials',
      customerTone: 'secondary',
      date: 'Oct 20, 2023',
      totalAmount: '$42,900.00',
      status: 'Processing',
      statusTone: 'processing',
    },
  ];

  protected readonly filterOptions: readonly string[] = [
    'All Orders',
    'Processing',
    'Shipped',
    'Delivered',
    'Cancelled',
  ];
}