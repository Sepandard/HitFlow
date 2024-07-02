import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

const MAT_MODULES = [MatFormFieldModule, MatInputModule, MatButtonModule];

@Component({
  selector: 'hitflow-page-heatmap',
  templateUrl: './page-heatmap.component.html',
  styleUrls: ['./page-heatmap.component.scss'],
  imports: [MAT_MODULES, FormsModule],
  standalone: true,
})
export class PageHeatmapComponent {
  public url!: string;
  private router = inject(Router);

  goToFrame() {
    if (!this.url) return;
      window.open('http://localhost:4100/shop?heatmap=true')
  }
}
