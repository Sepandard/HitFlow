import { Provider } from '@angular/core';
import { CustomLoadingCellRenderer } from './data-grid/data-grid-custom/data-grid-custom.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const COMPONENTS: Provider[] = [
  SidebarComponent,
  DataGridComponent,
  CustomLoadingCellRenderer,
];
