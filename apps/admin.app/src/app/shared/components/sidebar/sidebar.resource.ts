import { Sidebar } from './sidebar.interface';

export const sidebarLink: Sidebar[] = [
  // {
  //   id: 1,
  //   title: 'Dashboard',
  //   displayText: 'Dashboard',
  //   route: '/admin/dashboard',
  //   icon: {
  //     matIcon: 'dashboard',
  //   },
  // },
  {
    id: 2,
    title: 'Product',
    displayText: 'Product',
    route: 'admin/product',
    icon: {
      matIcon: 'inventory_2',
    },
  },
  {
    id: 3,
    title: 'User',
    displayText: 'User',
    route: 'admin/user',
    icon: {
      matIcon: 'person_filled',
    },
  },
  {
    id: 4,
    title: 'Category',
    displayText: 'Category',
    route: 'admin/category',
    icon: {
      matIcon: 'category',
    },
  },  
 
  {
    id: 5,
    title: 'Order',
    displayText: 'Order',
    route: 'admin/order',
    icon: {
      matIcon: 'shopping_cart',
    },
  },  
  {
    id: 6,
    title: 'Comment',
    displayText: 'Comment',
    route: 'admin/comment',
    icon: {
      matIcon: 'comment',
    },
  },
];
