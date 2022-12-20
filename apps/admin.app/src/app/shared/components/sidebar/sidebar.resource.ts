import { Sidebar } from './sidebar.interface';

export const sidebarLink: Sidebar[] = [
  {
    id: 1,
    title: 'Dashboard',
    displayText: 'Dashboard',
    route: '/feature/dashboard',
    icon: {
      matIcon: 'dashboard',
    },
  },
  {
    id: 2,
    title: 'Product Mangement',
    displayText: 'Product Mangement',
    route: '/feature/product/list',
    icon: {
      matIcon: 'inventory_2',
    },
  },
];
