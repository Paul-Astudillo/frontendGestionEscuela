import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRepresentanteComponent } from './formulario-representante.component';

describe('FormularioRepresentanteComponent', () => {
  let component: FormularioRepresentanteComponent;
  let fixture: ComponentFixture<FormularioRepresentanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioRepresentanteComponent]
    });
    fixture = TestBed.createComponent(FormularioRepresentanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
