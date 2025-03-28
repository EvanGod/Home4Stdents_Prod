import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidarIdentidadPage } from './validar-identidad.page';

describe('ValidarIdentidadPage', () => {
  let component: ValidarIdentidadPage;
  let fixture: ComponentFixture<ValidarIdentidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarIdentidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
