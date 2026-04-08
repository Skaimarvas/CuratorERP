import { ChangeDetectionStrategy, Component } from '@angular/core';

type StockState = 'In Stock' | 'Low Stock' | 'Out of Stock';

interface InventoryRow {
  productName: string;
  sku: string;
  category: string;
  stockState: StockState;
  units: number;
  warehouse: string;
  price: string;
}

interface DistributionItem {
  label: string;
  percent: number;
  color: string;
}

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory.page.html',
  styleUrl: './inventory.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryPage {
  protected readonly inventoryRows: readonly InventoryRow[] = [
    {
      productName: 'Eames Lounge Chair',
      sku: 'SKU-FUR-0012',
      category: 'Premium Furniture',
      stockState: 'In Stock',
      units: 24,
      warehouse: 'Central Hub - A1',
      price: '$4,950.00',
    },
    {
      productName: 'Concrete Facade Panel',
      sku: 'SKU-MAT-8842',
      category: 'Architectural Materials',
      stockState: 'Low Stock',
      units: 4,
      warehouse: 'West Depot - B4',
      price: '$1,220.00',
    },
    {
      productName: 'Brass Fitting 12mm',
      sku: 'SKU-HDW-2210',
      category: 'Hardware',
      stockState: 'Out of Stock',
      units: 0,
      warehouse: 'Central Hub - C9',
      price: '$42.50',
    },
    {
      productName: 'Oak Timber Planks (2m)',
      sku: 'SKU-LUM-4451',
      category: 'Lumber',
      stockState: 'In Stock',
      units: 142,
      warehouse: 'External Yard - L2',
      price: '$85.00',
    },
  ];

  protected readonly stockDistribution: readonly DistributionItem[] = [
    { label: 'Materials', percent: 42, color: '#455f88' },
    { label: 'Furniture', percent: 28, color: '#5d5d78' },
    { label: 'Hardware', percent: 30, color: '#546073' },
  ];
}
