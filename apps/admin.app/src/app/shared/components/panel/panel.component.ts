import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hf-admin-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  @Input() label?: string;
  constructor() {}

  ngOnInit(): void {}
}
