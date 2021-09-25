import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedHomeComponent } from './detailed-home.component';

describe('DetailedHomeComponent', () => {
  let component: DetailedHomeComponent;
  let fixture: ComponentFixture<DetailedHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
