import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMatriculasComponent } from './listar-matriculas.component';

describe('ListarMatriculasComponent', () => {
  let component: ListarMatriculasComponent;
  let fixture: ComponentFixture<ListarMatriculasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMatriculasComponent]
    });
    fixture = TestBed.createComponent(ListarMatriculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
