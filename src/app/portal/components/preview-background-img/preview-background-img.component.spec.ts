import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewBackgroundImgComponent } from './preview-background-img.component';

describe('PreviewBackgroundImgComponent', () => {
  let component: PreviewBackgroundImgComponent;
  let fixture: ComponentFixture<PreviewBackgroundImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewBackgroundImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewBackgroundImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
