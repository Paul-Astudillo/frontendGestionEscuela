import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFacturaComponent } from './formulario-factura.component';

describe('FormularioFacturaComponent', () => {
  let component: FormularioFacturaComponent;
  let fixture: ComponentFixture<FormularioFacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioFacturaComponent]
    });
    fixture = TestBed.createComponent(FormularioFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
