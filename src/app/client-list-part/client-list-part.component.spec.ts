import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListPartComponent } from './client-list-part.component';

describe('ClientListPartComponent', () => {
  let component: ClientListPartComponent;
  let fixture: ComponentFixture<ClientListPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientListPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
