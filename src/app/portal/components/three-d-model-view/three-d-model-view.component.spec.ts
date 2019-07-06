import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDModelViewComponent } from './three-d-model-view.component';

describe('ThreeDModelViewComponent', () => {
  let component: ThreeDModelViewComponent;
  let fixture: ComponentFixture<ThreeDModelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDModelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDModelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
