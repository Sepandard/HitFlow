import { Component } from '@angular/core';

@Component({
  selector: 'hit-flow-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  finalPrice = "30000000";
  data = [
    {
      productName: "کتاب",
      productCost: "10000000",
      catagory: "کتاب",
      imgSrc: "../../../../../assets/photo/about/bookImage.jpg"
    },
    {
      productName: "کتاب",
      productCost: "10000000",
      catagory: "کتاب",
      imgSrc: "../../../../../assets/photo/mock/2.jfif"
    },
    {
      productName: "کتاب",
      productCost: "10000000",
      catagory: "کتاب",
      imgSrc: "../../../../../assets/photo/mock/1.jfif"
    },
  ];
  buyProducts(){
    console.log("Buy");
    
  }
}
