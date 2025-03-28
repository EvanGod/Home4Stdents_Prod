import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PropertyUploadPage } from './property-upload.page';

describe('PropertyUploadPage', () => {
  let component: PropertyUploadPage;
  let fixture: ComponentFixture<PropertyUploadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
