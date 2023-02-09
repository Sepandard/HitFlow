import { Component } from '@angular/core';

@Component({
  selector: 'hit-flow-delivered-items',
  templateUrl: './delivered-items.component.html',
  styleUrls: ['./delivered-items.component.scss']
})
export class DeliveredItemsComponent {
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
}
