import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNameWebappComponent } from './create-name-webapp.component';

describe('CreateNameWebappComponent', () => {
  let component: CreateNameWebappComponent;
  let fixture: ComponentFixture<CreateNameWebappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNameWebappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNameWebappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
