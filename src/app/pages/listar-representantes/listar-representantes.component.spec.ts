import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRepresentantesComponent } from './listar-representantes.component';

describe('ListarRepresentantesComponent', () => {
  let component: ListarRepresentantesComponent;
  let fixture: ComponentFixture<ListarRepresentantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarRepresentantesComponent]
    });
    fixture = TestBed.createComponent(ListarRepresentantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
