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
    title: 'Product Management',
    displayText: 'Product Management',
    route: '/feature/product/list',
    icon: {
      matIcon: 'inventory_2',
    },
  },  {
    id: 3,
    title: 'User Management',
    displayText: 'Product Management',
    route: '/feature/user/list',
    icon: {
      matIcon: 'person_filled',
    },
  },
];
