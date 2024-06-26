import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAnioLectivoComponent } from './formulario-anio-lectivo.component';

describe('FormularioAnioLectivoComponent', () => {
  let component: FormularioAnioLectivoComponent;
  let fixture: ComponentFixture<FormularioAnioLectivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioAnioLectivoComponent]
    });
    fixture = TestBed.createComponent(FormularioAnioLectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
