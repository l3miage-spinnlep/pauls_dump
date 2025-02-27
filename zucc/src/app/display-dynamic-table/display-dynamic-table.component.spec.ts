import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDynamicTableComponent } from './display-dynamic-table.component';

describe('DisplayDynamicTableComponent', () => {
  let component: DisplayDynamicTableComponent;
  let fixture: ComponentFixture<DisplayDynamicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayDynamicTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
