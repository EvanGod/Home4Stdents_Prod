import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisCitasPage } from './mis-citas.page';

describe('MisCitasPage', () => {
  let component: MisCitasPage;
  let fixture: ComponentFixture<MisCitasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisCitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
