import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPriceAndTimeComponent } from './add-price-and-time.component';

describe('AddPriceAndTimeComponent', () => {
  let component: AddPriceAndTimeComponent;
  let fixture: ComponentFixture<AddPriceAndTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPriceAndTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPriceAndTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
