import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWebComponent } from './create-web.component';

describe('CreateWebComponent', () => {
  let component: CreateWebComponent;
  let fixture: ComponentFixture<CreateWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
