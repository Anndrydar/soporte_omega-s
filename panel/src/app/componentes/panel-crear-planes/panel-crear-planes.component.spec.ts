import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCrearPlanesComponent } from './panel-crear-planes.component';

describe('PanelCrearPlanesComponent', () => {
  let component: PanelCrearPlanesComponent;
  let fixture: ComponentFixture<PanelCrearPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCrearPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelCrearPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
