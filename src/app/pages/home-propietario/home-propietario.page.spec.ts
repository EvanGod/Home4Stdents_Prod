import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePropietarioPage } from './home-propietario.page';

describe('HomePropietarioPage', () => {
  let component: HomePropietarioPage;
  let fixture: ComponentFixture<HomePropietarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePropietarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
