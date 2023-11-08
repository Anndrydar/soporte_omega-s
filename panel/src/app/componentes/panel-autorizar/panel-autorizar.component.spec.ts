import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAutorizarComponent } from './panel-autorizar.component';

describe('PanelAutorizarComponent', () => {
  let component: PanelAutorizarComponent;
  let fixture: ComponentFixture<PanelAutorizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelAutorizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelAutorizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
