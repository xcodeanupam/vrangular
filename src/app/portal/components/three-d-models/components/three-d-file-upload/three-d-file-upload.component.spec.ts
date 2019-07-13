import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDFileUploadComponent } from './three-d-file-upload.component';

describe('ThreeDFileUploadComponent', () => {
  let component: ThreeDFileUploadComponent;
  let fixture: ComponentFixture<ThreeDFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
