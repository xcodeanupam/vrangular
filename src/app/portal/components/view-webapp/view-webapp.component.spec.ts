import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWebappComponent } from './view-webapp.component';

describe('ViewWebappComponent', () => {
  let component: ViewWebappComponent;
  let fixture: ComponentFixture<ViewWebappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWebappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWebappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
