import { Component } from '@angular/core';
import { Cart, OrderStatus } from '../../api/cart.model';
import { CartService } from '../../api/cart.service';

@Component({
  selector: 'hit-flow-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  model: Cart[] = [];
  total: string = '0';
  finalPrice = '30000000';
  data = [
    {
      productName: 'کتاب',
      productCost: '10000000',
      catagory: 'کتاب',
      imgSrc:
        '../../../../../assets/photo/about/bookImage.jpg'
    },
    {
      productName: 'کتاب',
      productCost: '10000000',
      catagory: 'کتاب',
      imgSrc: '../../../../../assets/photo/mock/2.jfif'
    },
    {
      productName: 'کتاب',
      productCost: '10000000',
      catagory: 'کتاب',
      imgSrc: '../../../../../assets/photo/mock/1.jfif'
    }
  ];
  buyProducts() {
    console.log('Buy');
  }
  constructor(private api: CartService) {
    this.getData();
    this.getTotal();
  }
  getData() {
    this.api.getAll(OrderStatus.Cart).subscribe({
      next: (data) => {
        this.model = data;
      }
    });
  }

  getTotal() {
    this.api.total(OrderStatus.Cart).subscribe({
      next: (data) => {
        this.total = data;
      }
    });
  }
}
