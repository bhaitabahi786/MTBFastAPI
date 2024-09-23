import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlaformComponent } from './create-plaform.component';

describe('CreatePlaformComponent', () => {
  let component: CreatePlaformComponent;
  let fixture: ComponentFixture<CreatePlaformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePlaformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePlaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
