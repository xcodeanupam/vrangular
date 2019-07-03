import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDModelComponent } from './three-d-model.component';

describe('ThreeDModelComponent', () => {
  let component: ThreeDModelComponent;
  let fixture: ComponentFixture<ThreeDModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
