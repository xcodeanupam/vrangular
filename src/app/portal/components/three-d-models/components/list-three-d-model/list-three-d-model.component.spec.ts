import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThreeDModelComponent } from './list-three-d-model.component';

describe('ListThreeDModelComponent', () => {
  let component: ListThreeDModelComponent;
  let fixture: ComponentFixture<ListThreeDModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListThreeDModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListThreeDModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
