import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCrearCategoriasComponent } from './panel-crear-categorias.component';

describe('PanelCrearCategoriasComponent', () => {
  let component: PanelCrearCategoriasComponent;
  let fixture: ComponentFixture<PanelCrearCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCrearCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelCrearCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
