import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecomponetComponent } from './createcomponet.component';

describe('CreatecomponetComponent', () => {
  let component: CreatecomponetComponent;
  let fixture: ComponentFixture<CreatecomponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecomponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
