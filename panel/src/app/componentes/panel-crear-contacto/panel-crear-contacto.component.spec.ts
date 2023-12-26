import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCrearContactoComponent } from './panel-crear-contacto.component';

describe('PanelCrearContactoComponent', () => {
  let component: PanelCrearContactoComponent;
  let fixture: ComponentFixture<PanelCrearContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCrearContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelCrearContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
