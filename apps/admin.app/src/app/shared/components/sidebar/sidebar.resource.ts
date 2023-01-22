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
    title: 'Product',
    displayText: 'Product',
    route: '/product',
    icon: {
      matIcon: 'inventory_2',
    },
  },
  {
    id: 3,
    title: 'User',
    displayText: 'User',
    route: '/user',
    icon: {
      matIcon: 'person_filled',
    },
  },
  {
    id: 4,
    title: 'Category',
    displayText: 'Category',
    route: '/category',
    icon: {
      matIcon: 'category',
    },
  },  
 
  {
    id: 5,
    title: 'Order',
    displayText: 'Order',
    route: '/order',
    icon: {
      matIcon: 'shopping_cart',
    },
  },
];
