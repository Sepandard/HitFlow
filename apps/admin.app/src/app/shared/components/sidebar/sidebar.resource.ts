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
    route: '/product',
    icon: {
      matIcon: 'inventory_2',
    },
  },
  {
    id: 3,
    title: 'User Management',
    displayText: 'User Management',
    route: '/user',
    icon: {
      matIcon: 'person_filled',
    },
  },
  {
    id: 4,
    title: 'Category Management',
    displayText: 'Category Management',
    route: '/category',
    icon: {
      matIcon: 'category',
    },
  },
];
