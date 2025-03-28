import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerCitasProPage } from './ver-citas-pro.page';

describe('VerCitasProPage', () => {
  let component: VerCitasProPage;
  let fixture: ComponentFixture<VerCitasProPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCitasProPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
