import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCrearTecnicosComponent } from './panel-crear-tecnicos.component';

describe('PanelCrearTecnicosComponent', () => {
  let component: PanelCrearTecnicosComponent;
  let fixture: ComponentFixture<PanelCrearTecnicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCrearTecnicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelCrearTecnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
