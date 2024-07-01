import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRolComponent } from './listar-rol.component';

describe('ListarRolComponent', () => {
  let component: ListarRolComponent;
  let fixture: ComponentFixture<ListarRolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarRolComponent]
    });
    fixture = TestBed.createComponent(ListarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
