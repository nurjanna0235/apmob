import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Profil2Page } from './profil2.page';

describe('Profil2Page', () => {
  let component: Profil2Page;
  let fixture: ComponentFixture<Profil2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Profil2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
