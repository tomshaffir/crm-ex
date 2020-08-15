import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderItemsComponent } from './add-order-items.component';

describe('AddOrderItemsComponent', () => {
  let component: AddOrderItemsComponent;
  let fixture: ComponentFixture<AddOrderItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrderItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
