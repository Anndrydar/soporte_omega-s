import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCrearServiciosComponent } from './panel-crear-servicios.component';

describe('PanelCrearServiciosComponent', () => {
  let component: PanelCrearServiciosComponent;
  let fixture: ComponentFixture<PanelCrearServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCrearServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelCrearServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
