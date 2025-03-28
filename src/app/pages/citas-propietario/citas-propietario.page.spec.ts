import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitasPropietariosPage } from './citas-propietario.page';

describe('CitasPropietarioPage', () => {
  let component: CitasPropietariosPage;
  let fixture: ComponentFixture<CitasPropietariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasPropietariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
