import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnvioComponent } from './add-envio.component';

describe('AddEnvioComponent', () => {
  let component: AddEnvioComponent;
  let fixture: ComponentFixture<AddEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEnvioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
