import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../api/product-api.model';

@Component({
  selector: 'hit-flow-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() model?: Product;

  constructor(private router: Router) {}
  onClick(model: Product) {
    this.router.navigate(['product', model.id]);
  }
}
