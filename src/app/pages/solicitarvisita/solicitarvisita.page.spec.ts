import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitarvisitaPage } from './solicitarvisita.page';

describe('SolicitarvisitaPage', () => {
  let component: SolicitarvisitaPage;
  let fixture: ComponentFixture<SolicitarvisitaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarvisitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
