import { Provider } from '@angular/core';
import { CustomLoadingCellRenderer } from './data-grid/data-grid-custom/data-grid-custom.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { InputComponent } from './input/input.component';
import { PanelComponent } from './panel/panel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SpaceComponent } from './space/space.component';

export const COMPONENTS: Provider[] = [
  SidebarComponent,
  DataGridComponent,
  PanelComponent,
  CustomLoadingCellRenderer,
  SpaceComponent,
  InputComponent,
];
