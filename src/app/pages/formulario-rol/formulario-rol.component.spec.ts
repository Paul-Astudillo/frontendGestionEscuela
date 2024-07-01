import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRolComponent } from './formulario-rol.component';

describe('FormularioRolComponent', () => {
  let component: FormularioRolComponent;
  let fixture: ComponentFixture<FormularioRolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioRolComponent]
    });
    fixture = TestBed.createComponent(FormularioRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
