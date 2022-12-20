import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLoadingCellRenderer } from './data-grid-custom.component';

describe('CustomLoadingCellRenderer', () => {
  let component: CustomLoadingCellRenderer;
  let fixture: ComponentFixture<CustomLoadingCellRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLoadingCellRenderer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLoadingCellRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
