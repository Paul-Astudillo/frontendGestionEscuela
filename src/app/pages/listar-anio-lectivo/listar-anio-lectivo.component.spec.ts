import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAnioLectivoComponent } from './listar-anio-lectivo.component';

describe('ListarAnioLectivoComponent', () => {
  let component: ListarAnioLectivoComponent;
  let fixture: ComponentFixture<ListarAnioLectivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAnioLectivoComponent]
    });
    fixture = TestBed.createComponent(ListarAnioLectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
