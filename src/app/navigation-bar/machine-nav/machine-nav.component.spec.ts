import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineNavComponent } from './machine-nav.component';

describe('MachineNavComponent', () => {
  let component: MachineNavComponent;
  let fixture: ComponentFixture<MachineNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
