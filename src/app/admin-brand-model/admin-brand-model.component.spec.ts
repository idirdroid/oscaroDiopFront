import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBrandModelComponent } from './admin-brand-model.component';

describe('AdminBrandModelComponent', () => {
  let component: AdminBrandModelComponent;
  let fixture: ComponentFixture<AdminBrandModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBrandModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBrandModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
