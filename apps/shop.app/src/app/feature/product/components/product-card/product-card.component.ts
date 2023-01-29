import { Component, Input } from '@angular/core';
import { Product } from '../../api/product-api.model';

@Component({
  selector: 'hit-flow-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() model?: Product;
}
