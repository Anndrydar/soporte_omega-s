import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCrearProductosComponent } from './panel-crear-productos.component';

describe('PanelCrearProductosComponent', () => {
  let component: PanelCrearProductosComponent;
  let fixture: ComponentFixture<PanelCrearProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCrearProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelCrearProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
