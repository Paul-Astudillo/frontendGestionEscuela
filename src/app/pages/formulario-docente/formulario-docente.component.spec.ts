import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDocenteComponent } from './formulario-docente.component';

describe('FormularioDocenteComponent', () => {
  let component: FormularioDocenteComponent;
  let fixture: ComponentFixture<FormularioDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDocenteComponent]
    });
    fixture = TestBed.createComponent(FormularioDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
