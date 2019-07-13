import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDFileNameComponent } from './three-d-file-name.component';

describe('ThreeDFileNameComponent', () => {
  let component: ThreeDFileNameComponent;
  let fixture: ComponentFixture<ThreeDFileNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDFileNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDFileNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
