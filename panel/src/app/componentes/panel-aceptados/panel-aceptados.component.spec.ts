import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAceptadosComponent } from './panel-aceptados.component';

describe('PanelAceptadosComponent', () => {
  let component: PanelAceptadosComponent;
  let fixture: ComponentFixture<PanelAceptadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelAceptadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelAceptadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
